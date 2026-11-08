/**
 * Represents a task in the application.
 * @param id - The unique identifier for the task.
 * @param name - The name of the task.
 * @param createdAt - The date and time when the task was created.
 * @param startedAt - The date and time when the task was started.
 * @param resumedAt - The time at which the task was resumed. Good for saving states to track the duration.
 * @param completedAt - The date and time when the task was completed.
 * @param timeGoal - How long the task should take to complete.
 * @param duration - How long the task took to complete.
 * @param parent - The parent task of this task.
 * @param subtasks - The subtasks of this task.
 * @param progress - The progress of the task.
 * @param complete - Whether the task is complete.
 * @param points - The points awarded for completing the task.
 */
class Task {
    id: string;
    name: string;
    createdAt: string;
    startedAt?: string;
    resumedAt?: string;
    completedAt?: string;
    timeGoal?: number;
    duration: number;
    parent?: Task;
    subtasks: Task[];
    progress: number;
    complete: boolean;
    points: number;

    constructor(
        id: string,
        name: string = 'Task',
        createdAt: string = new Date().toISOString(),
        startedAt?: string,
        resumedAt?: string,
        completedAt?: string,
        timeGoal?: number,
        duration: number = 0,
        parent?: Task,
        subtasks: Task[] = [],
        progress: number = 0,
        complete: boolean = false,
        points: number = 0,
    ) {
        this.id = id;
        this.name = name
        this.createdAt = createdAt;
        this.startedAt = startedAt;
        this.resumedAt = resumedAt;
        this.completedAt = completedAt;
        this.timeGoal = timeGoal;
        this.duration = duration;
        this.parent = parent;
        this.subtasks = subtasks;
        this.progress = progress;
        this.complete = complete;
        this.points = points;
    }

    /*
    Start the task. Initializes startedAt, resumedAt, and duration.
     */
    Start(): void{
        this.startedAt = new Date().toISOString();
        this.resumedAt = new Date().toISOString();
        this.duration = 0;
    }

    /*
    Complete the task. Sets the completedAt attribute, and updates duration and progress to 100%.
     */
    Complete(): void{
        this.completedAt = new Date().toISOString();
        if(!this.resumedAt) this.resumedAt = new Date().toISOString();
        this.duration += new Date().getTime() - Date.parse(this.resumedAt);
        this.progress = 100;
    }

    /*
    Pause the task. Updates the duration.
     */
    Pause(): void{
        if(!this.resumedAt) this.resumedAt = new Date().toISOString();
        this.duration = new Date().getTime() - Date.parse(this.resumedAt);
    }

    /*
    Resume the task. Sets the resumedAt attribute.
     */
    Resume(): void{
        this.resumedAt = new Date().toISOString();
    }
}

export default Task;