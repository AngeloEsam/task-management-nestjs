/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard.ts';
import { RolesGuard } from 'src/auth/roles.guard';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UserRole } from 'src/users/user.entity';
import { Roles } from 'src/auth/roles.decorator';

@ApiTags('tasks')
@ApiBearerAuth()
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({ status: 201, description: 'Task created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  @ApiOperation({ summary: 'Fetch all tasks' }) 
  @ApiResponse({ status: 200, description: 'List of tasks fetched successfully.' })
  @ApiResponse({ status: 404, description: 'No tasks found.' })
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Fetch task' }) 
  @ApiResponse({ status: 200, description: 'fetched successfully.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  findOne(@Param('id') id: string) {
    if (!id) {
      throw new Error('Not Found');
    }
    return this.tasksService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Fully update a task' })
  @ApiResponse({ status: 200, description: 'Task updated successfully.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Partially update a task' })
  @ApiResponse({ status: 200, description: 'Task updated successfully.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  partialUpdate(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.partialUpdate(+id, updateTaskDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Delete a task' })
  @ApiResponse({ status: 200, description: 'Task deleted successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden, Admin only' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  async remove(@Param('id') id: string) {
    const task = await this.tasksService.findOne(+id);
    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
    return this.tasksService.remove(+id);
  }
}
