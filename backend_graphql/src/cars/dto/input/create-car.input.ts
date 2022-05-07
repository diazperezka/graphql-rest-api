import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCarInput {
  @Field()
  @IsNotEmpty()
  model: string;

  @Field()
  @IsNotEmpty()
  year: number;
}
