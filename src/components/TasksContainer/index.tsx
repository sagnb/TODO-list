import { useEffect, useState } from 'react'
import { TrashSimple } from '@phosphor-icons/react/dist/ssr';
import { Task, taskManager, UpdateTaskFunction } from '../../managers/TaskManager'
import './style.css'

export function TasksContainer() {
    const [tasks, setTasks] = useState<Task[]>([])

    const updateTasks: UpdateTaskFunction = (newTasks : Task[]) => {
        setTasks([...newTasks])
    }

    useEffect(() => {
        taskManager.subscribe(updateTasks)
    }, [])

    if (tasks.length > 0) {
        return (
            <div className='tasksContainer'>
                {tasks.map((task, id) => (
                    <div className='taskDiv'>
                        <span
                            key={`spanTask${id}`}
                        >{task.label}</span>
                        <div 
                            className='trashButton'
                            onClick={() => taskManager.deleteTask(task)}
                        >
                            <TrashSimple size={28} weight="fill" />
                        </div>
                    </div>
                ))}
            </div>
        )
    } else {
        return <></>
    }
}