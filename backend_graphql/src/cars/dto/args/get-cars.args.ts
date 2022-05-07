import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray, IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetUserArgs {
  @Field(() => [String])
  @IsArray()
  ids: number[];
}
