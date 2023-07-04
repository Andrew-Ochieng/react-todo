import { useState } from "react";
import axios from "axios";

const AddTodo = () => {
    const [title, setTitle  ] = useState("")

    const handleForm = (e) => {
        e.preventDefault()

        // post data in axios
        axios.post('http://localhost:3000/todos', {
            title
        })
        .then((res) => res.data)
        .then((data) => {
            console.log(data)
        })
        
        


        
        
    }

    return ( 
        <>
            <form onSubmit={handleForm} className="todo-container grid md:grid-cols-3">
                <input 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
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