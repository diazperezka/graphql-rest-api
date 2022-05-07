import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  email?: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  password?: string;
}
