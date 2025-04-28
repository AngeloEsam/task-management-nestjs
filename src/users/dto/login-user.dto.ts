/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
