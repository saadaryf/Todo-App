import React from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'
import { useState, useEffect } from 'react';


const Home = (props) => {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("im on Delete of todo: ", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const addTodo = (title, desc) => {
    // console.log("im adding this", title, desc);
    let sno;
    if (todos.length !== 0) {
      sno = todos[todos.length - 1].sno + 1;
    } else {
      sno = 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    // console.log(myTodo);
    setTodos([...todos, myTodo]);

  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </div>
  )
}

export default Home
