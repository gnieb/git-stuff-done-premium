import {useState} from "react";

function Task ({task, removeTaskFromTasks}) {
   const [isPriority, setIsPriority] = useState(task.priority)
   
   
   const handleDone = () => {
    fetch(`http://localhost:3001/tasks/${task.id}`, {
        method: "DELETE",
    })
    .then(r=> r.json())
    .then(() => removeTaskFromTasks(task))
   }

   const handlePriorityClick = () => {
    setIsPriority(!isPriority)
   }

    return (
        <div>
            <div >
                <h3>{task.name}</h3>
                <p>{task.due}</p>
                <p>{task.category}</p>
                <p>{task["note to self"]}</p>
                <i 
                className= "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow hover:cursor-pointer"
                onClick={handlePriorityClick}>
                {isPriority ? "Priority" : "No Prio"}
                </i>
                <i
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow hover:cursor-pointer"   
                onClick={handleDone}>
                    DONE
                </i>
            </div>  
        </div>
        
        
    )
}

export default Task;