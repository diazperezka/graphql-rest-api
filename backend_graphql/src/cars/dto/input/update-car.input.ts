import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateCarInput {
  @Field()
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @Field()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  model?: string;

  @Field()
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  year?: number;
}
