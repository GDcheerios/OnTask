/**
 * Represents a task in the application.
 * @param id - The unique identifier for the task.
 * @param name - The name of the task.
 * @param createdAt - The date and time when the task was created.
 * @param startedAt - The date and time when the task was started.
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
    startedAt: string;
    completedAt: string;
    timeGoal: number;
    duration?: number;
    parent?: Task;
    subtasks: Task[];
    progress: number;
    complete: boolean;
    points: number;

    constructor(id: string, name: string = 'Task') {
        this.id = id;
        this.name = name
        this.createdAt = new Date().toISOString();

    }

    Start(): void{
        this.startedAt = new Date().toISOString();
        this.duration = 0;
    }

    Pause(): void{
        this.duration = new Date().getTime() - new Date(this.startedAt).getTime();
    }

    Resume(): void{
        this.startedAt = new Date().toISOString();
    }
}