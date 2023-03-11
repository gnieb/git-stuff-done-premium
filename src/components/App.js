import TaskList from "./TaskList";
import CalendarDisplay from "./CalendarDisplay";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import {useState, useEffect} from "react";


function App() {
const [tasks, setTasks] = useState([])
useEffect(() => {
  fetch("http://localhost:3000/tasks")
  .then(r=> r.json())
  .then(tData => setTasks(tData))
}, ([]))


  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Switch>
        <Route exact path="/">
           <TaskList tasks={tasks} />
        </Route>
        <Route exact path="/calendar">
          <CalendarDisplay />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
