import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'


function App() {
  const [todos, setTodos] = useState([])

  async function getTodos () {
    try {
      let res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      let todos = res.data.splice(190)
      setTodos(todos)
      // console.log(todos.id)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

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
