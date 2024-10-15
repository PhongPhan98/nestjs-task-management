import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  /**
   * Get all tasks
   * @returns An array of all tasks
   */
  getTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  /**
   * Create a new task
   * @param createTaskDto The data for the task to create
   * @returns The newly created task
   */
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get('/:id')
  /**
   * Get a single task by ID
   * @param id The ID of the task to retrieve
   * @returns The task with the given ID
   */
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }


  @Delete('/:id')
  /**
   * Delete a task by ID
   * @param id The ID of the task to delete
   */
  deleteTaskById(@Param('id') id: string) {
    return this.tasksService.deleteTaskById(id);
  }
}
