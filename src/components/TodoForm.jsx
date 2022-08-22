import React from 'react'
import { useState } from 'react'

function TodoForm({addTodo}) {
  const [userInput, setUserInput] = useState('');

//Добавление todo при нажатии на кнопку Submit
const hSubmit = (ev) =>{
  ev.preventDefault();
  addTodo(userInput);
  setUserInput("");
}

//Сохранение вводимого пользователем текста в input
const hChange = (ev) =>{
  setUserInput(ev.currentTarget.value);
}

//Добавление todo при нажатии на Enter
const hKeyPress = (ev) =>{
  if (ev.key === "Enter"){
    hSubmit(ev);
  }
}

  return (
    <form className = "form" onSubmit = {hSubmit}>
      <input className = "input"
        type = "text"
        placeholder = 'Add todo'
        value = {userInput}
        onChange = {hChange}
        onKeyDown = {hKeyPress}
      />
      <button className = "submit" type = "submit"> + </button>
    </form>

  );
}

export default TodoForm
