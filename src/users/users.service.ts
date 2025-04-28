/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserRole } from './user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user: User = {
      id: Date.now(),
      username: createUserDto.username,
      password: hashedPassword,
      role: createUserDto.role || UserRole.USER,
    };
    this.users.push(user);
    return user;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
