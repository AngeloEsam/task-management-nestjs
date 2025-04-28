/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsEnum, IsString } from 'class-validator';
import { UserRole } from '../user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Write documentation' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'Write Swagger documentation for the API' })
  @IsString()
  password: string;
  @ApiProperty({ example: 'Write Swagger documentation for the API' })
  @IsEnum(UserRole)
  role: UserRole;
}
