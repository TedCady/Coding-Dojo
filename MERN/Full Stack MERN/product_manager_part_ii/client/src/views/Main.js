import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Show from '../components/Show';
import Edit from '../components/Edit';
import { Router } from '@reach/router';

export default () => {
    const [clickyBoi, setClickyBoi] = useState(true); // switch to indicate changes to ProductList useEffect for updates

    return (
        <div>
        <Router >
            <ProductForm path='/' clickyBoi={clickyBoi} setClickyBoi={setClickyBoi}>
                <ProductList path='/' clickyBoi={clickyBoi} />
            </ProductForm>
            <Show path='/products/:id'/>
            <Edit path='/products/edit/:id'/>
        </Router>
        </div>
    )
}
