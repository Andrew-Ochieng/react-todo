import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const AddTodo = () => {
    const [formData, setFormData] = useState({title: ""})
    const navigate = useNavigate()

    const handleForm = (e) => {
        e.preventDefault()

        // post data in axios
        axios.post('http://localhost:3000/todos', formData)
        .then((res) => {
            console.log(res.data)
            toast.success('New todo added succesfully!')
            setTimeout(() => {
                navigate('/')
            }, 2000);
        })
        
        
    }

    return ( 
        <>
            <h1 className='title'>Add New Todo</h1>
            <ToastContainer 
                position = 'top-center'
                autoClose = {2000}
                hideProgressBar = {true}
                closeOnClick = {true}
                pauseOnHover = {true}
                draggable = {true}
                progress = {undefined}
                theme= 'colored'
            />
            <form onSubmit={handleForm} className="todo-container grid md:grid-cols-3">
                <input 
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    name="title"
                    type="text" 
                    className="todo-input"
                    placeholder="Add Todo" 
                />
                {/* <select name="" className="todo-input border-none">
                    <option value="true">Completed</option>
                    <option value="false">Incompleted</option>
                </select> */}
                <button className="btn">
                    Submit
                </button>
            </form>
        </>
     );
}
 
export default AddTodo;