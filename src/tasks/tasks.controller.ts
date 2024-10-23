import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
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
  deleteTaskById(@Param('id') id: string): void {
    return this.tasksService.deleteTaskById(id);
  }


  @Post('/:id/status')
  /**
   * Update the status of a task
   * @param id The ID of the task to update
   * @param status The new status of the task
   * @returns The updated task
   */
  updateTaskById(@Param('id') id: string, @Body('status') status: TaskStatus): Task {
    console.log(id, status);
    return this.tasksService.updateTaskById(id, status);
  }
}
