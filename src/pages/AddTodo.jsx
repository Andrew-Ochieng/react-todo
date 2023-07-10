import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const AddTodo = () => {
    const [formData, setFormData] = useState({title: "", description: ""})
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
        <div className="md:px-32 px-4 md:my-16 my-8">
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
            <div className="flex flex-col items-center justify-center space-y-6 ">
                <form onSubmit={handleForm} className="flex flex-col items-center space-y-6 md:min-w-xl">
                    <input 
                        required
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        type="text" 
                        className="todo-input w-full"
                        placeholder="Add title..." 
                    />
                    <textarea
                        required 
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        type="text" 
                        className="todo-input w-full"
                        placeholder="Add description..." 
                        cols="30" 
                        rows="4"
                    ></textarea>
                    <button className="btn w-full">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default AddTodo;