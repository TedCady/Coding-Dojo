import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductForm from './ProductForm';


export default props => {
    const { id, deleteHandler } = props;
    const [product, setProduct] = useState('');
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
            })
            .catch(res => console.log(res.data))
    }, [])
    const updateHandler = input => {
        axios.put(`http://localhost:8000/api/products/update/${id}`, input)
            .then(res => console.log(res.data))
            .catch(res => console.log(res.data))
    }

    return(
        loaded && (
            <div>
                <ProductForm 
                    clickHandler={updateHandler}
                    iTitle={product.title}
                    iPrice={product.price}
                    iDesc={product.description}
                />
                <a href='/'><input onClick={() => {deleteHandler(id)}} type='submit' value='Delete'/></a>
            </div>
        )
    )
}