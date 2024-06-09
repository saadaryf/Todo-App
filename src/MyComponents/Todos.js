import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    let TodosListStyle = {
        paddingBottom: '80px'
    }
    return (
        <div className='container' style={TodosListStyle}>
            <h3 className='text-center my-3'>Todos List</h3>
            {props.todos.length === 0 ? "No Todos to Display" :
                props.todos.map((todo) => {
                    return (
                        <>
                        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                        <hr/> 
                        </>
                    )
                })
            }
        </div>
    )
}

export default Todos
