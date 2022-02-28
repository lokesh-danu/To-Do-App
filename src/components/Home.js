import { useState } from "react";
import List from "./List";
const Home = () => {
    const [todo, setTodo] = useState('');
    const [list, setList] = useState([])
    const [completed, setCompleted] = useState([]);
    const [error, setError] = useState(false);
    const handleSubmit=async (e)=>{
        e.preventDefault();
        // console.log(e.target);
        var text=todo.toString();
        text=text.trim();
        console.log(text.length);
        if(text.length<6){
            setError(true);
        }
        else {
            setError(false);
            updateList();
            setTodo('');

        }
        // alert('form submitted');
    }
    const updateList=()=>{
        const newList =[...list,{value:todo,completed:false,id:Math.floor(Math.random()*9999)}];
        setList(newList);
    }
    const toggleStatus=(id)=>{
        let update=list.map(item=>{
            if(item.id===id){
                item.completed=!item.completed;
            }
            return item
        })
        setList(update);
        console.log()
    }
    const remove=(e)=>{
        e.preventDefault();
        let update=list.filter(e=>e.completed===true);
        let newList=[],newCompleted=[];
        list.forEach(el=>{
            if(el.completed===true)newCompleted.push(el);
            else newList.push(el);
        })
        console.log(update);
        setList(newList);
        setCompleted(newCompleted);
    }
    return ( 
        <>
        <div className="home">
            <div className="title">To-Do</div>
            <div className="input">
                <form action="" onSubmit={handleSubmit}>
                <input type="text"
                placeholder="type your task here !" 
                value={todo}
                onChange={e=>setTodo(e.target.value)}
                />
                {
                    error && <div className="error">
                    Please Enter a valid Task. (more than 5 letters)
                </div>
                }
                </form>
                {/* {todo} */}
            </div>
                <div className="list-cnt">
                    <div className="main">
                        {
                            list.length>0 && 
                            <button className="remove" onClick={remove} >Remove Completed Task</button>

                        }
                        {
                            list.map(e => {
                                return (

                                    <button onClick={el => toggleStatus(e.id)} className={e.completed === true ? "list-item complete" : "list-item incomplete"}>
                                        {e.value}
                                    </button>

                                )
                            })
                        }
                    </div>
                    <div className="completed">
                        { completed.length>0 &&
                            <div className="right-heading">Completed tasks</div>
                        }
                        {
                            completed.map(e => {
                                return (
                                    <button className="completed-right">
                                        {e.value}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>

            
        </div>
        </>
     );
}
 
export default Home;