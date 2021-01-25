import Form from '../components/Form';
import AuthorList from '../components/AuthorList';
import axios from 'axios';
import { useState } from 'react';

export default props => {
    const { formHeader, err, setErr, itemList, setItemList } = props;
    const submitNew = author => {
        axios.post('http://localhost:8000/api/authors/create', { name: author })
            .then(res => { author.length > 2 ? window.location.href = '/' : console.log(res.data) })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErr(<p style={{color:'red', fontSize:'75%'}}>{errorArr}</p>);
            })
    }

    return(
        <div className='divStyle'>
            <br/>
            <Form initName='' submitHandler={submitNew} formHeader={formHeader} err={err} setErr={setErr}/>
            <br/>
            <AuthorList itemList={itemList} setItemList={setItemList}/>
        </div>
    )
}