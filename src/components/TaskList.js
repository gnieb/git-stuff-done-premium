import Task from "./Task";
import AddNewTask from "./AddNewTask";

function TaskList ({tasks, handleNewTask}) {


    const displayTasks = tasks.map((task) => {
        return (
            <Task key={task.id} task={task}/>
        )
    })


    return (
        <div>
            {displayTasks}
            <AddNewTask handleNewTask={handleNewTask} /> 
        </div>
    )
}

export default TaskList; 