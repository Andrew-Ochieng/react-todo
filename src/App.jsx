import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'


function App() {
  const [todos, setTodos] = useState([])

  useeff

  return (
    <>
      <div>
        <h1 className='title'>Todos</h1>
        <AddTodo />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  )
}

export default App
