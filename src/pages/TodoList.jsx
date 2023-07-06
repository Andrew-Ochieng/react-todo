import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const TodoList = ({todos, setTodos}) => {

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/todos/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    const deletedTodo = todos.filter((todo) => todo.id !== id) 
                    setTodos(deletedTodo) 
                    toast.error('Todo item deleted succesfully')  
                } else {
                    console.error('Product could not be deleted. Try again later!!!')
                }
            })
    }

    console.log(todos)

    return ( 
        <>
            <h1 className='title'>Todos</h1>
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
            <div className='todo-container '>
                {todos.map((todo, index) => (
                    <div key={index} className='todo-card'>
                        <p>{todo.id}</p>
                        <p>{todo.title}</p>
                        <div className="flex justify-between">
                            <button className="btn">
                                    Edit
                            </button>
                            <button onClick={() => handleDelete(todo.id)} className="btn bg-red-500">
                                Delete
                            </button>
                        </div>
                </div>
                ))}
            </div>
        </>
     );
}
 
export default TodoList;