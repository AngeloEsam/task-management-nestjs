/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  id?: number; 
  @ApiProperty({ example: 'Write documentation' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Write Swagger documentation for the API' })
  @IsString()
  description: string;
}
