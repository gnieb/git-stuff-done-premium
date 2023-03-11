import {useState} from "react";

function Task ({task}) {
   const [isPriority, setIsPriority] = useState(task.priority) 

   const handlePriorityClick = () => {
    setIsPriority(!isPriority)
   }
    
    return (
        <div>
            <h3>{task.name}</h3>
            <h4>{task.due}</h4>
            <h4>{task.category}</h4>
            <h4>{task["note to self"]}</h4>
            <i onClick={handlePriorityClick}>{isPriority ? "Priority" : "not priority"}</i>
        </div>
    )
}

export default Task;