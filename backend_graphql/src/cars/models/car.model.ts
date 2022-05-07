import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CarModel {
  @Field()
  id: number;

  @Field()
  model: string;

  @Field()
  year: string;
}
