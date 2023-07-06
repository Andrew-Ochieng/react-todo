import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import TodoList from './pages/TodoList'
import AddTodo from './pages/AddTodo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'


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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <TodoList todos={todos} setTodos={setTodos} /> }  />
          <Route path='/addtodo' element={ <AddTodo setTodos={setTodos} /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
