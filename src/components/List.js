// import { useEffect } from "react";
const List = ({list,toggleStatus}) => {
    // useEffect(() => {
    
    // }, [list])
    // console.log(list);
    return ( 
        <>
        <div className="list">
            {
                list.map(e=>{
                    return(
                        
                        <button onClick={el=>toggleStatus(e.id)} className={e.completed===true ? "list-item complete":"list-item incomplete"}>
                        {e.value}
                    </button>
                        
                    )
                })
            }
        </div>
        </>
     );
}
 
export default List;