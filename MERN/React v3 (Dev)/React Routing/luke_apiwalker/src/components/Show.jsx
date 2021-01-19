import { useEffect, useState } from "react"

export default function Show(props){
    const [output, setOutput] = useState(<h1>Loading...</h1>)
    const selected = props.selectedMacro[props.mic-1];

    useEffect(() => {
        props.setMicro(props.mic)
    }, [props])

    function annoyanceHandler(input){
        return(
            input.map((item) =>{
                return <tr className='infoRow'><td className='keys'></td><td className='val'>{item}</td></tr>
            })
        )
    }

    function foundHandler(){
        let keys = Object.keys(selected);
        let vals = Object.values(selected);
        console.log(vals)
        setOutput(
            <table className='infoTable'>
            {keys.map((item, index) => {
                return(
                    <tr className='infoRow'>
                        <td className='key'>
                            {item.toUpperCase()}
                        </td>
                        <td className='val'>                            
                            {vals[index].constructor === Array ? annoyanceHandler(vals[index]) : vals[index]}
                        </td>
                    </tr>
                )
            })}
            </table>
        )
    }

    function errHandler(){
        console.log('err')
    }

    useEffect(() => {
            selected != null || selected != undefined ?
                foundHandler() :
                null
    }, [selected])

    return(
        <div className='tableForm'>
            {output}
        </div>
    )
}