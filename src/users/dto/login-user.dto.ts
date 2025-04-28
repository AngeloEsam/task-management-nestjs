/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ example: 'Write Swagger documentation for the API' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'Write Swagger documentation for the API' })
  @IsString()
  password: string;
}
