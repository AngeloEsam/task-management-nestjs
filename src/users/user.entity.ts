/* eslint-disable prettier/prettier */
export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

export class User {
  id: number;
  username: string;
  password: string;
  role: UserRole;
}
