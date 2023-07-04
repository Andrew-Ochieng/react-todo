import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/todos')
    .then((res) => {
      console.log(res.data)
      setTodos(res.data)
    })
  },[])

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
