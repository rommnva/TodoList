import React from 'react'

function Todo({todo, deleteTodo, checkTodo, openTodo}) {
  return (
    <div className = "todoBlock" key = {todo.id}>

      <div className = {todo.complete ? "todoBlockItemComplete" : "todoBlockItem"}
      onClick = {() => checkTodo(todo.id)}>
        {todo.task}
      </div>

      <div className = "buttons">
      <button className = "delete" onClick = {() => deleteTodo(todo.id)}>
        x
      </button>

      <button className = "open" onClick = {() => openTodo(todo.id)}>
        >
      </button>
      </div>
    </div>
  )
}

export default Todo
