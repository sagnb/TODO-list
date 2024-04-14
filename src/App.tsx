import { NewTaskDiv } from './components/NewTaskDiv'
import { TasksContainer } from './components/TasksContainer'
import './App.css'

function App() {
  return (
    <>
      <div className='mainDiv'>
        <NewTaskDiv/>
        <TasksContainer/>
      </div>
    </>
  )
}

export default App
