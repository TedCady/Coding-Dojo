import { useEffect, useState } from 'react';
// import { Router } from '@reach/router'
import axios from 'axios';

export default props => {
    const { deleteHandler } = props;
    const [productList, setProductList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
            .then(res => {
                setProductList(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <ul>
        {loaded && (
            productList.map((item) => {
                return  <li>
                        <a href={`/products/${item._id}`}>{item.title}</a>{' '}
                        <a href={`/products/edit/${item._id}`}><input type='submit' value='Edit'/></a>{' '}
                        <a href='/'><input onClick={() => {deleteHandler(item._id)}} type='submit' value='Delete'/></a>
                        </li>
            })
        )}
        </ul>
    )
}