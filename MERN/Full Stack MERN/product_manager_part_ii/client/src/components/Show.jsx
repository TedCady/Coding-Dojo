import { useState, useEffect } from 'react';
import axios from 'axios';

export default props => {
    const { id } = props;
    const [item, setItem] = useState([])
    const [output, setOutput] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setItem(res.data))
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        const nullItem = (
            <div>
                <p>Item not found</p>
            </div>
        );
        const foundItem = (
            <div>
                <h1>{item.title}</h1>
                <h3>Price</h3>
                <p>${item.price}</p>
                <h3>Description</h3>
                <p>{item.description}</p>
            </div>
        )
        setOutput(
            item.title == null ?
                nullItem :
                foundItem
        )
            
    }, [item])

    return(
        <div>
            <a href='/'>Home</a>
            {output}
        </div>
    )
}