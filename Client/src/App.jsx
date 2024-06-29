import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"
import "./index.css"

function App() {
  return (
    <div >
      <h1 className="text-center">To Do List</h1>
      <TaskInput />      
      <TaskList />
    </div>
  )
}

export default App
