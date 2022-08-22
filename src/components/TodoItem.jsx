import React from 'react'
import { useState } from 'react'

function TodoItem({todo, editTodo}) {
  let [userInputItem, setUserInputItem] = useState(todo.task);

//Редактирование объекта todo при событии onChange в области редактирования todo
  const hChange = (ev) =>{
    ev.preventDefault();
    userInputItem = ev.currentTarget.value;
    setUserInputItem(ev.currentTarget.value);
    editTodo(userInputItem, todo.id);
  }

  if (todo.active === true){
    return (
      <div className = "todoItemBlock" key = {todo.id}>
        <textarea className = "textarea"
          type = "text"
          value = {userInputItem}
          onChange = {hChange}
        />
      </div>
    );
  } else return null
}

export default TodoItem
