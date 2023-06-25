import { useState } from "react";
import axios from "axios";

const AddTodo = () => {
    const [todo, setTodo] = useState("")

    const handleForm = (e) => {
        e.preventDefault()

        // post data in axios
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            todo
        })
        .then((res) => res.data)
        .then((data) => {
            console.log(data)
        })

        // fetch('https://jsonplaceholder.typicode.com/todos', {
        //     method: "POST", 
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         todo
        //     })
        // })
        // .then((res) => res.json())
        // .then((data) => {
        //     console.log(data)
        // })

        
        
    }

    return ( 
        <>
            <div className="todo-container flex justify-center">
                <form onSubmit={handleForm} method="post">
                    <input 
                        onChange={(e) => setTodo(e.target.value)}
                        value={todo}
                        type="text" 
                        className="todo-input"
                        placeholder="Add Todo" 
                    />
                </form>
            </div>
        </>
     );
}
 
export default AddTodo;