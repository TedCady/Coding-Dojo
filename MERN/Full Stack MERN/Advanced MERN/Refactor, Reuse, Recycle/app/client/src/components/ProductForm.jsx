import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = props => {
    const { clickHandler, iTitle, iPrice, iDesc} = props;
    const [title, setTitle] = useState(iTitle);
    const [price, setPrice] = useState(iPrice);
    const [desc, setDesc] = useState(iDesc);

    return (
        <div>
                <p>
                    <label>Title</label>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price</label>
                    <input type="number" step='0.01' onChange = {(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                <label>Description</label>
                    <textarea onChange = {(e)=>setDesc(e.target.value)} value={desc}/>
                </p>
                <a href='/'><input 
                    type="submit" 
                    onClick={() => clickHandler({
                        title: title,
                        price: price,
                        description: desc
                })}/></a>
            {props.children}
        </div>
    )
}
export default ProductForm;