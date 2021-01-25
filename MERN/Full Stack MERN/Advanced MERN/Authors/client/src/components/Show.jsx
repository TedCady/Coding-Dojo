import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import HomeButton from './HomeButton';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default props => {
    const { id, err, setErr } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded]  = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        loaded && (
            <div className='divStyle'>
                <HomeButton />
                <h1>{author.name}</h1>
                <label><EditButton id={id} err={err} setErr={setErr}/>{' '}<DeleteButton id={id}/></label>
            </div>
        )
    )
}