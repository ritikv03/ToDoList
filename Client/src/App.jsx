import ParticleBackground from "./components/ParticlesComponent"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"
import "./index.css"

function App() {
  return (
    //Making header here and importing all the components
    <div >
      <ParticleBackground/>
      <div className="content">
      <h1>Complete Tasks!</h1>
      <TaskInput />      
      <TaskList />
      </div>
    </div>
  )
}

//Exporting our App from here
export default App
