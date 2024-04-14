import { useState } from 'react'
import { taskManager } from '../../managers/TaskManager'
import './style.css'

export function NewTaskDiv() {
    const [label, setLabel] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLabel(event.target.value)
    }

    const addTask = () => {
        if (!(label.replace(' ', '') === ''))
            taskManager.addTask({label: label, check: false})
    }

    return (
        <div className="newTaskDiv">
            <input 
                className='addTaskField'
                type='text'
                value={label}
                placeholder='Enter The Task Here...'
                onChange={handleChange}
            />
            <input 
                className='addTaskButton' 
                type='button' 
                value='Add' 
                onClick={addTask}
            />
        </div>
    )
}
