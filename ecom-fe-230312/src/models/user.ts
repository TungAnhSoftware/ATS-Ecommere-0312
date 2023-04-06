import { BaseModel } from './baseModel';

export interface User extends BaseModel {
  username: string;
  email: string;
}
