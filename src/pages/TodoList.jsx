import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const TodoList = ({todos, setTodos}) => {
    const [search, setSearch] = useState('')

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/todos/${id}`)
            .then((res) => {
                // console.log(res.status)
                if (res.status === 200) {
                    const deletedTodo = todos.filter((todo) => todo.id !== id) 
                    setTodos(deletedTodo) 
                    toast.error('Todo item deleted succesfully')  
                } else {
                    console.error('Product could not be deleted. Try again later!!!')
                }
            })
    }

    const handleEdit = (id) => {
        console.log(`Proceed to edit item ${id}`)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()))


    return ( 
        <>
            <div className="md:px-32 px-4 md:my-16 my-8">
                <ToastContainer 
                    position = 'top-center'
                    autoClose = {3000}
                    hideProgressBar = {true}
                    closeOnClick = {true}
                    pauseOnHover = {true}
                    draggable = {true}
                    progress = {undefined}
                    theme= 'colored'
                />

                <form onSubmit={handleSearch} className='flex justify-center items-center md:my-12 my-8'>
                    <input 
                        type="search" 
                        value={search}
                        onChange={handleSearch}
                        className="border-2 p-2 rounded-xl outline-none focus-within:border-green-500 w-full" 
                        placeholder="Searching todo..." 
                    />
                </form>

                <div className='flex flex-col items-center '>
                    <table class="table-fixed min-w-full border rounded-lg">
                        <thead className="bg-white border-b p-2">
                            <tr>
                                <th className="border-r">Id</th>
                                <th className="border-r">Title</th>
                                <th className="border-r">Description</th>
                                <th className="border-r">Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {filteredTodos.map((todo) => (
                            <tbody>
                                <tr className="bg-white border-b p-2">
                                    <td className="p-2 border-r" >{todo.id}</td>
                                    <td className="p-2 border-r">{todo.title}</td>
                                    <td className="p-2 border-r">{todo.description}</td>
                                    <td className="p-2 border-r">
                                        <button onClick={() => handleEdit(todo.id)} className="btn bg-green-500">
                                            Edit
                                        </button>
                                    </td>
                                    <td className="p-2">
                                        <button onClick={() => handleDelete(todo.id)} className="btn bg-red-500">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </>
     );
}
 
export default TodoList;