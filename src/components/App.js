import TaskList from "./TaskList";
import CalendarDisplay from "./CalendarDisplay";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About"
import { Switch, Route } from "react-router-dom";
import {useState, useEffect} from "react";


function App() {

const [tasks, setTasks] = useState([])
const [events, setEvents] = useState([])
const [filteredCategory, setFilteredCategory] = useState('')
const [sorted, setSorted] = useState('')

useEffect(() => {
  Promise.all([
    fetch("http://localhost:3001/tasks"),
    fetch("http://localhost:3001/events"),
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

const filterByCategory = (someString) => {
  setFilteredCategory(someString.toLowerCase())
}

const filteredTasks = tasks.filter((task) => task.category.toLowerCase() === filteredCategory)

const removeTaskFromTasks = (doomedTask) => {
  const updatedTasks = tasks.filter((task) => doomedTask.id != task.id)
  setTasks(updatedTasks)
}


  return (
    <div className = "App" >
      <header >
        <Header />
      </header> 
      <div>
        <Switch>
          <Route exact path="/">
            <TaskList tasks={filteredTasks}
            handleNewTask={handleNewTask}
            removeTaskFromTasks={removeTaskFromTasks}
            filterByCategory={filterByCategory} />
          </Route>
          <Route exact path="/calendar">
            <CalendarDisplay events={events} tasks ={tasks} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
