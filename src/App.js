import './App.css';
import { useState } from 'react'
import { useEffect } from 'react'
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'
import TodoItem from './components/TodoItem'

//Получение данных из LocalStorage
const getTodo = () => {
  let list = localStorage.getItem('lists');
  if (list) {
    return JSON.parse(localStorage.getItem('lists'));
  } else {
    return[];
  }
}

function App() {
  const [todo, setTodo] = useState(getTodo());

//Занесение данных в LocalStorage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(todo))
  }, [todo])

//Добавление объекта todo
  const addTodo  = (userInput) => {
    if (userInput) {
        const newItem = {
          id: Math.random(),
          task: userInput,
          complete: false,
          active: false
      };
      setTodo([...todo, newItem]);
    }
  }

//Удаление объекта todo
  const deleteTodo = (id) => {
    setTodo ([...todo.filter((todo) => todo.id !== id)]);
  }

//Проверка завершенности todo
  const checkTodo = (id) => {
    setTodo ([...todo.map((todo) =>
      todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
    )]);
  }

//Открытие области редактирования todo
  const openTodo = (id) => {
    setTodo ([...todo.map((todo) =>
      todo.id === id ?
      {...todo, active: !todo.active} :
      todo.active === true ?
      {...todo, active: !todo.active} :
      {...todo}
    )]);
  }

//Редактирование объекта todo
  const editTodo  = (userInputItem, id) => {
      setTodo ([...todo.map((todo) =>
        todo.id === id ? {...todo, task: userInputItem} : {...todo}
      )]);
  }

  return (
    <div className = "main">
      <div className = "todo">
        <h1>Todo list: {todo.length}</h1>

        <TodoForm addTodo = {addTodo} />

        {todo.map((todo) => {
          return (
            <Todo
            todo = {todo}
            key = {todo.id}
            deleteTodo = {deleteTodo}
            checkTodo = {checkTodo}
            openTodo = {openTodo}
            />
          )
        })}
      </div>

      <div className = "todoItem">
        {todo.map((todo) => {
          return (
            <TodoItem
            todo = {todo}
            key = {todo.id}
            TodoItem = {TodoItem}
            editTodo = {editTodo}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
