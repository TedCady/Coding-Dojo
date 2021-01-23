import { useEffect, useState } from 'react';
// import { Router } from '@reach/router'
import axios from 'axios';

export default props => {
    const { clickyBoi, setItemID, deleteHandler } = props;
    const [productList, setProductList] = useState([]);
    const [output, setOutput] = useState(<p>Loading...</p>)

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
            .then(res => setProductList(res.data))
            .catch(err => console.log(err))
    }, [clickyBoi])

    useEffect(() => {
        const nullPList = (<p>No products yet</p>);
        const foundPList = (
            <ul style={{listStyle:'none'}}>
                {productList.map((item) => {
                    return(
                        <li>
                            <a href={`/products/${item._id}`} style={{marginRight:'20px'}}>{item.title}</a>
                            <a href='/' ><input onClick={() => deleteHandler(item._id)} type='submit' value='Delete' /></a>
                        </li>
                    )
                })}
            </ul>
        )
        setOutput(
            productList == undefined || productList == null ?
                nullPList:
                foundPList
        )

    }, [productList])

    return(output)
}