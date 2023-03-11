import {useState} from "react";


function AddNewTask ({handleNewTask}) {
const [newName, setNewName] = useState('');
const [category, setCategory] = useState('')    
const [isPrioChecked, setIsPrioChecked] = useState(false)
const [dueDate, setDueDate] = useState('')
const [notes, setNotes] = useState('')

function handleNewName (e) {
    setNewName(e.target.value)
}

function handleCategory (e) {
    setCategory(e.target.value)
}

function handleCheck(e) {
    setIsPrioChecked(e.target.checked)
}

function handleDueDate (e) {
    setDueDate(e.target.value)
}

function handleNotes(e) {
    setNotes(e.target.value)
}

function handleSubmit (e) {
    e.preventDefault()
    const newTask = {
        name: newName,
        due: dueDate,
        category: category,
        "note to self": notes,
        done: false,
        priority: isPrioChecked
    }

    fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    })
    .then(r=> r.json())
    .then(data => handleNewTask(data))
}

    return (
        <form onSubmit={handleSubmit}>
            <label>Let's git this done</label>
            <input 
            onChange={handleNewName}
            value={newName}
            type="text"
            placeholder="New Task..."
            />
            <select onChange={handleCategory} value={category}>
                <option>Select Category</option>
                <option>Web Dev</option>
                <option>Health</option>
                <option>Around the House</option>
            </select>
            <label>Notes to Self</label>
            <textarea
            onChange={handleNotes}
            placeholder="Add notes..."
            value={notes}
            />
            <label>Due Date</label>
            <input 
            onChange={handleDueDate}
            type="date"
            value={dueDate} 
            />
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