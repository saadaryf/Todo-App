import './App.css';
import './MyComponents/Header'
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import AddTodo from './MyComponents/AddTodo'
import { useState, useEffect } from 'react';

function App() {
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
    localStorage.setItem('todos', JSON.stringify(todos));
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

  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="My Todos App" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
