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

    fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    })
    .then(r=> r.json())
    .then(data => handleNewTask(data))
    setNewName('')
    setCategory('')
    setIsPrioChecked(false)
    setDueDate('')
    setNotes('')
}

    return (
        <div className="fixed top-20 left-10 ">
        <form onSubmit={handleSubmit}
        className="w-full max-w-lg my-12"
        >
        <div className="flex flex-wrap -mx-4 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Let's git this done</label>
                <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                onChange={handleNewName}
                value={newName}
                type="text"
                placeholder="New Task..."
                />
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Choose Category</label>
                <select 
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={handleCategory} 
                value={category}>
                    <option>Select ... </option>
                    <option>Web Dev</option>
                    <option>Health</option>
                    <option>Around the House</option>
                </select>
            </div>
        </div>
        <div>
            <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >Notes to Self</label>
            <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={handleNotes}
            placeholder="Add notes..."
            value={notes}
            />
        </div>
        <div>
            <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Due Date
            </label>
            <input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4-mx-4 mb-6 leading-tight focus:outline-none focus:bg-white"
            onChange={handleDueDate}
            type="date"
            value={dueDate} 
            />
        </div>
        <div
        className="-mx-4 mb-6 py-3 px-3">
            <label 
            htmlFor="priority"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >Priority Task?
            </label>
            <input
            id="priority"
            type="checkbox"
            checked={isPrioChecked}
            onChange={handleCheck}
            />
        </div>
        <div
        className="flex flex-row -mx-4 mb-6">
            <button type="submit" 
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:shadow-outline focus:outline-none">
                Add to List!
            </button>
        </div>
        </form>
        </div>
    )
}

export default AddNewTask;