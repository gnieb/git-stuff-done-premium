import {useState} from "react";


function AddNewTask ({handleNewTask}) {
const [newTask, setNewTask] = useState('');
const [category, setCategory] = useState('')    
const [isPrioChecked, setIsPrioChecked] = useState(false)

function handleCheck(e) {
    setIsPrioChecked(e.target.checked)
}




function handleSubmit () {
    
}

    return (
        <form onSubmit={handleSubmit}>
            <label>Let's git this done</label>
            <input 
            type="text"
            placeholder="New Task..."
            />
            <select>
                <option>Select Category</option>
                <option>Web Dev</option>
                <option>Health</option>
                <option>Around the House</option>
            </select>
            <label>Notes to Self</label>
            <textarea
            placeholder="Add notes..."
            />
            <label>Due Date</label>
            <input type="date" />
            <label htmlFor="priority">Priority Task?</label>
            <input
            id="priority"
            type="checkbox"
            checked={isPrioChecked}
            onChange={handleCheck}
            />
            <button type="submit">Add to List!</button>
        </form>
    )
}

export default AddNewTask;