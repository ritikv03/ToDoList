import ParticleBackground from "./components/ParticlesComponent"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"
import "./index.css"

function App() {
  return (
    //Making header here and importing all the components
    <div >
      <ParticleBackground/>
      <h1 className="text-center">To Do List</h1>
      <TaskInput />      
      <TaskList />
    </div>
  )
}

//Exporting our App from here
export default App
