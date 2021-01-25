import { useState } from 'react';
import { Card } from '@material-ui/core';

export default props => {
    const { initName, submitHandler, formHeader, err, setErr } = props;
    const [name, setName] = useState(initName);
    const onSubmit = () => {
        setErr();
        submitHandler(name);
    }

    return(
        <div className='divStyle'>
            <Card elevation={10} className='card'>
                <h1 className='header'>{formHeader}</h1>
                <p>{err}</p>
                <table>
                    <tr>
                        <td>
                            Name:
                        </td>
                        <td>
                            <input onChange={e => setName(e.target.value)} value={name}/>
                        </td>
                    </tr>
                    <br/>
                    <input onClick={onSubmit} type='submit'/>
                </table>
            </Card>
        </div>
    )
}