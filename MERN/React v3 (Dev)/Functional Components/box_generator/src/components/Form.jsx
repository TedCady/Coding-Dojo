import React, { useState } from 'react';

const Form = () => {
    const [color, setColor] = useState('');
    const [width, setWidth] = useState(25);
    const [height, setHeight] = useState(25);
    const [boxArr, setBoxArr] = useState([]);
    function addBox(){
        const nB = {
            color: color,
            width: width,
            height: height
        };
        setColor('');
        setBoxArr([...boxArr, nB])
    }

    return(
        <div style={{alignContent: 'center'}}>
            {/* {JSON.stringify(boxArr)} */}
            <div style={{marginTop:'25px',width: '100%', display:'flex', justifyContent: 'center'}}>
                <table>
                    <tr>
                        <td>
                            Color:
                        </td>
                        <td>
                            <input
                                type="text"
                                value={color}
                                onChange={(e)=>{setColor(e.target.value);}}
                            />
                        </td>
                        <td>
                            Width:
                        </td>
                        <td>
                            <input
                                type="number"
                                value={width}
                                onChange={(e)=>{setWidth(e.target.value);}}
                            />
                        </td>
                        <td>
                            Height:
                        </td>
                        <td>
                            <input
                                type="number"
                                value={height}
                                onChange={(e)=>{setHeight(e.target.value);}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type='submit' value='Submit' onClick={addBox}/>
                        </td>
                    </tr>
                </table>
            </div>
            <div style={{width: '90%', height: '5000px',display: 'flex', flexDirection:'row', justifyContent: 'center'}}>
                {
                    boxArr.map((box) => {
                        return <span style={{display: 'flex',backgroundColor: box.color, width: box.width + 'px', height: box.height + 'px', margin: '10px'}}></span>
                    })
                }
            </div>
        </div>
    )
}
export default Form;