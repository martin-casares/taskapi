import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAll() {
    return 'Get all tasks';
  }

  @Get(':id')
  findOne() {
    return 'Get one task';
  }

  @Post()
  create() {
    return 'Create task';
  }

  @Delete(':id')
  delete() {
    return 'Delete task';
  }

  @Put(':id')
  update() {
    return 'Update task';
  }
}
