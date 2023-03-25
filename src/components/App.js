import TaskList from "./TaskList";
import CalendarDisplay from "./CalendarDisplay";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import {useState, useEffect} from "react";


function App() {

const [tasks, setTasks] = useState([])
const [events, setEvents] = useState([])

useEffect(() => {
  Promise.all([
    fetch("http://localhost:3000/tasks"),
    fetch("http://localhost:3000/events"),
  ])
  
  .then(([resTasks, resEvents]) =>
    Promise.all([resTasks.json(), resEvents.json()])
    )
  .then(([dataTasks, dataEvents]) => {
    setTasks(dataTasks);
    setEvents(dataEvents);
  }); 
}, ([]))

const handleNewTask = (newTask) => {
  setTasks([newTask, ...tasks])
}


  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Switch>
        <Route exact path="/">
           <TaskList tasks={tasks} handleNewTask={handleNewTask} />
        </Route>
        <Route exact path="/calendar">
          <CalendarDisplay events={events} tasks ={tasks} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
