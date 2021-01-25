import Form from './Form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import HomeButton from './HomeButton';
import DeleteButton from './DeleteButton';

export default props => {
    const { id, err, setErr } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            });
    }, [])
    const updateHandler = author => {
        const good2Go = () => {
            axios.put('http://localhost:8000/api/authors/update/' + id, { name: author })
            .then(res => window.location.href = '/')
            .catch(err => {
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErr(<p style={{color:'red'}}>{errorArr}</p>);
                console.log(errorArr)
            })
        }
        author.length < 3 ?  
            setErr(<p style={{color:'red', fontSize: '75%'}}>Name must be at least 3 characters long</p>) : 
            good2Go()
       
    }

    return(
        loaded && (
            <div className='divStyle'>
                <HomeButton />
            <Form initName={author.name} submitHandler={updateHandler} formHeader={`Edit ${author.name}`} err={err} setErr={setErr} />
                <DeleteButton id={id}/>
            </div>
        )
    )
}