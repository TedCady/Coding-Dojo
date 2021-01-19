import { useEffect, useState } from "react";
import { Link } from '@reach/router';
import nodroids from './resources/nodroids.jfif'

export default function Micro(props){
    const [output, setOutput] = useState(<h1>Loading...</h1>)

    useEffect(() => {
        let found = false;
        function foundHandler(input){
            props.setMacro(props.mac)
            props.setSelectedMacro(input);
            found = true;
            setOutput(
                    <div className='form'>
                        {input.map((item, index) => {
                            return(
                                <Link
                                    to={`/${props.mac}/${index+1}`}
                                    className='macro'
                                >
                                    <button
                                        className={props.micro == index + 1 ? 'sMacro':'macro'}
                                    >
                                        {item.name}
                                    </button>
                                </Link>                    
                            )
                        })}
                    </div>
            )
        }
        function notFoundHandler(){
            setOutput(
                    <h1>
                        <Link
                            to={'/people'}
                        >
                            <img 
                                src={nodroids}
                            />
                        </Link>
                    </h1>
            );
        }
        props.macroNames.map((item, index) => {
            item.toLowerCase() == props.mac ?
                foundHandler(props.macroAPI[index]) :
                null
        })
        found ? null : notFoundHandler();
    }, [props])

    useEffect(() => {
        props.setMicro(null)
    }, [props.mac])


    return(
        <div>
            {output}
            {props.children}
        </div>
    )
}