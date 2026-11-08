import './App.css'

import Title from "./components/Title.tsx";
import TaskCard from "./components/ui/Task/TaskCard.tsx"

import Task from "./models/Task.ts";

function App() {
    const task = new Task('task1', 'Task 1');

    return (
        <>
            <Title/>
            <TaskCard task={task}/>
        </>
    )
}

export default App
