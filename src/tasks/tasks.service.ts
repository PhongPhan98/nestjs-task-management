import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTaskById(id: string): void {  
    const task = this.getTaskById(id);
    if (!task) return;
    this.tasks = this.tasks.filter((t) => t.id !== task.id);  
  }

  updateTaskById(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    console.log("Before: ", task);
    if (!task) return;
    task.status = status;
    console.log("After: ", task);
    return task;
  }
}
