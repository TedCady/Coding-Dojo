import React, { useState } from 'react'
import { Paper, Card, CardContent } from '@material-ui/core';
const ProductForm = props => {
    const { clickHandler, iTitle, iPrice, iDesc} = props;
    const [title, setTitle] = useState(iTitle);
    const [price, setPrice] = useState(iPrice);
    const [desc, setDesc] = useState(iDesc);

    return (
        <Card elevation={24}>
            <CardContent>
                <p>
                    <label>Title: </label><br/>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    $<input type="number" step='0.01' onChange = {(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                <label>Description</label><br/>
                    <textarea onChange = {(e)=>setDesc(e.target.value)} value={desc}/>
                </p>
                <a href='/'><input 
                    type="submit" 
                    onClick={() => clickHandler({
                        title: title,
                        price: price,
                        description: desc
                })}/></a>
            </CardContent>
            {props.children}
        </Card>
    )
}
export default ProductForm;