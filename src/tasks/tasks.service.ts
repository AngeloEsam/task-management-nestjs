/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks:CreateTaskDto[] = [];

  create(createTaskDto: CreateTaskDto) {
    const task = { id: Date.now(), ...createTaskDto };
    this.tasks.push(task);
    return task;
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    return this.tasks.find(task => task.id === id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = this.findOne(id);
    if (task) {
      Object.assign(task, updateTaskDto);
    }
    return task;
  }

  partialUpdate(id: number, updateTaskDto: UpdateTaskDto) {
    return this.update(id, updateTaskDto);
  }

  remove(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    return { deleted: true };
  }
}
