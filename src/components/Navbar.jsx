import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
            <div className="flex md:justify-around justify-between bg-teal-500 py-3 md:px-0 px-4">
                <div>
                    Todo List
                </div>

                <ul className="flex justify-between">
                    <li className="mx-2 bg-gray-100 py-1 px-3 rounded-lg">
                        <Link to='/'>Todos</Link>
                    </li>
                    <li className="mx-2 bg-gray-100 py-1 px-3 rounded-lg">
                        <Link to='/addtodo'>Create</Link>
                    </li>
                </ul>
            </div>
        </>
     );
}
 
export default Navbar;