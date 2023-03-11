import Task from "./Task";
import AddNewTask from "./AddNewTask";

function TaskList ({tasks}) {


    const displayTasks = tasks.map((task) => {
        return (
            <Task key={task.id} task={task}/>
        )
    })


    return (
        <div>
            {displayTasks}
            <AddNewTask /> 
        </div>
    )
}

export default TaskList; 