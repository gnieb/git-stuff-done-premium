import Task from "./Task";
import AddNewTask from "./AddNewTask";
import { useState } from "react";

function TaskList ({tasks, handleNewTask, removeTaskFromTasks, filterByCategory}) {
    const [sorted, setSorted] = useState('')

    function handleFilteredCategory(e) {
        filterByCategory(e.target.value)
    }

    function handleSort () {
        //elevator fn
    }

    const displayTasks = tasks.map((task) => {
        return (
                <div key={`d-${task.id}`}className="p-5 rounded-lg flex items-center justify-between space-x-8">
                    <Task key={task.id} task={task} removeTaskFromTasks={removeTaskFromTasks}/>
                </div>
        )
    })


    return (
        <div className="flex mb-4 ">
            <div className="w-1/2 bg-gray-50">
            <AddNewTask handleNewTask={handleNewTask} />
            </div>
            <div className = "w-1/2 bg-gray-200">
            <div className=" px-3 py-3" >
            <select 
                className="block w-1/2 bg-gray-100 border border-gray-200 text-gray-700 py-2 px-2 pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={handleFilteredCategory} 
                >
                    <option value= "">Filter By ... </option>
                    <option value="Web Dev">Web Dev</option>
                    <option value="Health">Health</option>
                    <option value="Around the House">Around the House</option>
                </select>

                <select
                className="block w-1/2 bg-gray-100 border border-gray-200 text-gray-700 py-2 px-2 pr-6 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={handleSort} 
                value={sorted}>
                    <option>Sort By ... </option>
                    <option>PRIORITY</option>
                    <option>DUE DATE</option>
                </select>
                </div>
            {displayTasks}
            </div>
        </div>
    )
}

export default TaskList; 