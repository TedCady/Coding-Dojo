import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Show from '../components/Show';
import Edit from '../components/Edit';
import { Router } from '@reach/router';
import axios from 'axios';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/`)
            .then(res => setProducts(res.data))
            .then(setLoaded(true))
            .catch(err => console.log(err))
    })    

    const createHandler = input => {
        axios.post('http://localhost:8000/api/products/new', input)
            .then(res => setProducts([...products], res.data))
            .catch(res => console.log(res));
    }

    const deleteHandler = input => {
        axios.delete(`http://localhost:8000/api/products/delete/${input}`)
        .then(res => setProducts([...products, res.data]))
        .catch(err => console.log(err))
    }

    return (
        <Router >
            <ProductForm 
                path='/' 
                clickHandler={createHandler}
                iTitle=''
                iPrice=''
                iDesc=''
            >
            {loaded && <ProductList path='/' products={products} deleteHandler={deleteHandler}/>}
            </ProductForm>
            <Show path='/products/:id' deleteHandler={deleteHandler}/>
            <Edit path='/products/edit/:id' deleteHandler={deleteHandler}/>
        </Router>
    )
}
