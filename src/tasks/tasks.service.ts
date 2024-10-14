import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    private tasks = [
        {
            id: 1,
            title: 'Task 1',
            description: 'Description 1',
        },
        {
            id: 2,
            title: 'Task 2',
            description: 'Description 2',
        },
        {
            id: 3,
            title: 'Task 3',
            description: 'Description 3',
        }
    ];

    getAllTasks() {
        return this.tasks;
    }

    createTask(id: number, title: string, description: string) {
        const task = { id, title, description };
        this.tasks.push(task);
        return task;
    }


}
