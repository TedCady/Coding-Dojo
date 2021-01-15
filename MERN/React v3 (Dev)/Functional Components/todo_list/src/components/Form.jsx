import React, { useState } from 'react';
import styles from './styles/styles.module.css';

const Form = props => {
    const { list, setList } = props;
    const [task, setTask] = useState('');
    
    const changeHandler = e => {
            setTask(e.target.value)
    }

    const addTask = () => {
        console.log("addTask")
        if(task != ''){
            let newTask = {
                todo: task,
                isChecked: false
            }
            setList([...list, newTask]);
            setTask('');
        }
    }

    return(
        <div className={styles.form}>
            <label className={styles.form}>
                <input onChange={changeHandler} type='text' name='task' value={task} placeholder='Add New Task'/>
                <button onClick={addTask} type='submit'>Add</button>
            </label>
        </div>
    )
}
export default Form;