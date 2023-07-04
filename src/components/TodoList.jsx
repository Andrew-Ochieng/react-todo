import axios from "axios";


const TodoList = ({todos}) => {

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/todos/${id}`)
            .then((res) => {
                res.status === 200 ? 
                    console.log('Todo was successfully deleted') : 
                    console.error('Product could not be deleted. Try again later!!!')
            })
    }

    // console.log(todos)

    return ( 
        <>
            <div className='todo-container '>
                {todos && todos.map((todo, index) => (
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