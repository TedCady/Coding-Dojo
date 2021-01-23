import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Show from '../components/Show';
import Edit from '../components/Edit';
import { Router } from '@reach/router';
import axios from 'axios';

export default () => {
    const [clickyBoi, setClickyBoi] = useState(true); // switch to indicate changes to ProductList useEffect for updates

    const deleteHandler = id => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res => res.data)
            .catch(err => console.log(err))
    }

    return (
        <Router >

            <ProductForm path='/' clickyBoi={clickyBoi} setClickyBoi={setClickyBoi}>
                <ProductList path='/' clickyBoi={clickyBoi} deleteHandler={deleteHandler} />
            </ProductForm>

            <Show path='/products/:id' deleteHandler={deleteHandler}/>

            <Edit path='/products/edit/:id' deleteHandler={deleteHandler}/>

        </Router>
    )
}
