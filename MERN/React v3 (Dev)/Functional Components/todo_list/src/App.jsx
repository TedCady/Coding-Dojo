import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import ListItems from './components/ListItems'
import './App.css';
// Allow the user to add a new task, initially set to not completed.
// Allow the user to remove a task by clicking the delete button.
// Allow the user to toggle a task's completion property by clicking the checkbox next to it.
// Ninja Bonus: When updating the tasks' state, don't mutate the current task objects or the current task list.
// Sensei Bonus: Persist the todos list on page refreshes. Hint, consider combining the browser's localStorage with the useEffect hook.

export default function App(){
  // Iterate through the existing tasks using the map method.
  const [list, setList] = useState(()=>{
    if(localStorage.getItem('list').length > 0){
      return JSON.parse(localStorage.getItem('list'));
    }
    return [];
  })

  useEffect(() => {
    return localStorage.setItem('list', JSON.stringify([...list]));
  }, [list])

  const deleteAll = () => {
    return setList([]);
  }

  const completeAll = () => {
    let temp = list;
    temp.map((task) => {
      task.isChecked = true;
    })
    return setList([...temp])
  }

  const uncheckAll = () => {
    let temp = list;
    temp.map((task) => {
      task.isChecked = false;
    })
    return setList([...temp])
  }

  return (
    <div className="App">
        <Form list={list} setList={setList}/>
        <div style={{width: '60%', display: 'flex', justifyContent:'space-between'}}>
          <button onClick={deleteAll} type='submit'>Delete All</button>
          <button onClick={completeAll} type='submit'>Check All</button>
          <button onClick={uncheckAll} type='submit'>Uncheck All</button>
        </div>
        <div style={{backgroundColor: 'lightblue', width: '80%', borderRadius: '25px', marginTop: '25px'}}>
          {list.length < 1 ? <p style={{color: 'white'}}><b>All Clear!</b></p> :
          list.map((task, i) => {
            return <ListItems list={list} task={task} setList={setList} index={i}/>
          })}
        </div>
    </div>
  );
}