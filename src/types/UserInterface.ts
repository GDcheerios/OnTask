interface User {
    id: number;
    username: string;
    completeTask(taskID: string): void;
}