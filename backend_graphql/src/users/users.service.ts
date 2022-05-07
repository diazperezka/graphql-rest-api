import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
import { UserModel } from './models/user.model';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { GetUserArgs } from './dto/args/get-user.args';

@Injectable()
export class UsersService {
  private backend_users: string;
  constructor(private configService: ConfigService) {
    this.backend_users = this.configService.get<string>('backend_users');
  }

  public async getUsers(): Promise<UserModel[]> {
    const response = await axios.get(`${this.backend_users}`);

    return response.data.users;
  }

  public async getUser({ id }: GetUserArgs): Promise<UserModel> {
    const response = await axios.get(`${this.backend_users}/${id}`);

    return response.data.data;
  }

  public async createUser(createUserData: CreateUserInput): Promise<UserModel> {
    const response = await axios.post(`${this.backend_users}/`, createUserData);

    console.log(response.data.user);

    return response.data.user;
  }
}
