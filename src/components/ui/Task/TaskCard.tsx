import Task from "../../../models/Task.ts";
import './taskcard.css'

interface Props {
    task: Task
}

export default function TaskCard(props: Props){
    return <div className='taskcard'>
        <h1>{props.task.name}</h1>
    </div>
}