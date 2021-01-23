import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = props => {
    const { clickyBoi, setClickyBoi } = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState('');

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title: title,
            price: price,
            description: desc
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
        setClickyBoi(!clickyBoi)
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="number" step='0.01' onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                <label>Description</label><br/>
                    <textarea onChange = {(e)=>setDesc(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
            {props.children}
        </div>
    )
}
export default ProductForm;