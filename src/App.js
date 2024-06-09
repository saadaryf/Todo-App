import './App.css';
import './MyComponents/Header'
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import AddTodo from './MyComponents/AddTodo'
import { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    // console.log("im on Delete of todo: ", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))

  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "go to the market",
      desc: "you need to go to the market"
    },
    {
      sno: 2,
      title: "go to the university",
      desc: "makeup class on saturday "
    },
    {
      sno: 3,
      title: "complete assginment",
      desc: "cloud computing assignment before monday"
    }
  ]);
  return (
    <>
      <Header title="My Todos App" searchBar={false} />
      <AddTodo/> 
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
