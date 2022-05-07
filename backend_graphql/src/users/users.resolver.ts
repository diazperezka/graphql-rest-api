import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args ';
import { CreateUserInput } from './dto/input/create-user.input';
import { DeleteUserInput } from './dto/input/delete-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { UserModel } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserModel, { name: 'user', nullable: true })
  async getUser(@Args() getUserArgs: GetUserArgs): Promise<UserModel> {
    return await this.usersService.getUser(getUserArgs);
  }

  @Query(() => [UserModel], { name: 'users', nullable: true })
  async getUsers(): Promise<UserModel[]> {
    return await this.usersService.getUsers();
  }

  @Mutation(() => UserModel)
  async createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<UserModel> {
    return await this.usersService.createUser(createUserData);
  }

  //   @Mutation(() => UserModel)
  //   updateUser(
  //     @Args('updateUserData') updateUserData: UpdateUserInput,
  //   ): UserModel {
  //     return this.usersService.updateUser();
  //   }

  //   @Mutation(() => UserModel)
  //   deleteUser(
  //     @Args('deleteUserData') deleteUserData: DeleteUserInput,
  //   ): UserModel {
  //     return this.usersService.deleteUser();
  //   }
}
