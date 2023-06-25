

const TodoList = ({todos, setTodos}) => {

    const handleDelete = (deletedTodo) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${deletedTodo.id}`, {method: "DELETE"})
    .then((res) => {
        if(res.ok) {
            const newTodos = todos.filter((todo) => todo.id !== deletedTodo.id)
            setTodos(newTodos)
        } else {
            res.json().then(error => console.warn(error)) 
        }
    })

    }

    return ( 
        <>
            <div className='todo-container '>
                {todos && todos.map((todo, index) => (
                    <div key={index} className='todo-card'>
                        <p>{todo.title}</p>
                        <div className="flex justify-between">
                            <button className="btn">
                                    Edit
                            </button>
                            <button onClick={handleDelete} className="btn bg-red-500">
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