import { useState, useEffect } from 'react';
import axios from 'axios';

export default props => {
    const { id, deleteHandler } = props;
    const [item, setItem] = useState([])
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [desc, setDesc] = useState('')
    const [output, setOutput] = useState(<p>Loading...</p>)
    const [editConf, setEditConf] = useState('')

    const editHandler = props => {
        const { deleteHandler } = props;
        axios.put(`http://localhost:8000/api/products/update/${id}`,{
            title: item.title,
            price: item.price,
            description: item.desc
        })
        setEditConf(<p>Updates Processed!</p>)
    }

    const titleHandler = e => {
        setItem({
            title: e.target.value,
            price: item.price,
            description: item.description
        })
    }

    const priceHandler = e => {
        setItem({
            title: item.title,
            price: e.target.value,
            description: item.description
        })
    }

    const descHandler = e => {
        setItem({
            title: item.title,
            price: item.price,
            description: e.target.value
        })
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setItem(res.data))
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        setOutput(
            <div>
                <p>Title: </p>
                <input value={item.title} onChange={e => titleHandler(e)}/>
                <p>Price: </p>
                <input value={item.price} onChange={e => priceHandler(e)}/>
                <p>Description: </p>
                <input value={item.description} onChange={e => descHandler(e)}/>
                <p><input type='submit' onClick={editHandler}></input></p>
            </div>
        )
    }, [item])

        return(
        <div>
            <a href='/' style={{marginRight:'20px'}}>Home</a>
            <a href={`/products/${item._id}`}>Back</a>            
            {editConf}
            {output}
            <a href='/' ><input onClick={() => deleteHandler(item._id)} type='submit' value='Delete' /></a>
        </div>
    )
}