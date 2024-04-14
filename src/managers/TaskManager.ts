export interface Task {
    label: string
    check: boolean
}

export type UpdateTaskFunction = (newTasks: Task[]) => void

function createTaskManager() {
    const tasks: Task[] = []
    const observers: UpdateTaskFunction[] = []

    const subscribe = (observerFunction: UpdateTaskFunction) => {
        if (observers.indexOf(observerFunction) < 0) {
            observers.push(observerFunction)
            observerFunction(tasks)
        }
    }

    const notifyAll = () => {
        for (const observerFunction of observers) {
            observerFunction(tasks)
        }
    }

    const addTask = (task: Task) => {
        if (tasks.indexOf(task) < 0) {
            tasks.push(task)
            notifyAll()
        }
    }

    const deleteTask = (task: Task) => {
        const index = tasks.indexOf(task)
        if (index >= 0) {
            if (index > 0)
                tasks.splice(index, index)
            else
                tasks.shift()
            notifyAll()
        }
    }

    return {
        subscribe,
        addTask,
        deleteTask,
    }
}

export const taskManager = createTaskManager()
