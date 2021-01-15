import React, { useState } from 'react';
import styles from './styles/styles.module.css';

const ListItems = props => {
    const { list, setList, task, index } = props;
    const [style, setStyle] = useState('')

    const deleteHandler = e => {        
        list.splice(index, 1);
        return setList([...list])
    }

    const checkHandler = e => {
        {list[index].isChecked ?
            list[index].isChecked = false :
            list[index].isChecked = true}
        return setList([...list]);
    }

    return(
        <div className={styles.li}>
            <label className={index % 2 == 0 ? styles.zero : styles.nonZero}>
                <span>
                    <input onChange={checkHandler} type='checkbox' checked={task.isChecked}/>
                </span>
                    {task.isChecked ? 
                        <span className={styles.true}>{task.todo}</span> :
                        <span>{task.todo}</span>
                    }
                <input onClick={deleteHandler} type='submit' value='X'/>
            </label>
        </div>
    )
}
export default ListItems;