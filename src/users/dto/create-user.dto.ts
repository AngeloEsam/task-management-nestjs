/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsEnum, IsString } from 'class-validator';
import { UserRole } from '../user.entity';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}
