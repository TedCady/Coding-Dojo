import HomePage from '../components/HomePage';
import { Router } from '@reach/router';
import EditAuthor from '../components/EditAuthor';
import Show from '../components/Show';
import { useState } from 'react';

export default () => {
    const [err, setErr] = useState();
    const [itemList, setItemList] = useState([]);
    
    return(
        <Router >
            <HomePage path='/' formHeader='Add an Author' err={err} setErr={setErr} itemList={itemList} setItemList={setItemList}/>
            <EditAuthor path='/authors/edit/:id' err={err} setErr={setErr} itemList={itemList} setItemList={setItemList}/>
            <Show path='/authors/show/:id' err={err} setErr={setErr} itemList={itemList} setItemList={setItemList}/>
        </Router>
    )
}