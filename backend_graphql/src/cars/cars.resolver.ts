import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { CreateCarInput } from './dto/input/create-car.input';
import { UpdateCarInput } from './dto/input/update-car.input';
import { CarModel } from './models/car.model';

@Resolver(() => CarModel)
export class CarsResolver {
  constructor(private readonly carsService: CarsService) {}

  @Mutation(() => CarModel)
  createCar(@Args('createCarInput') createCarInput: CreateCarInput) {
    return this.carsService.create(createCarInput);
  }

  @Query(() => [CarModel], { name: 'cars' })
  findAll() {
    return this.carsService.findAll();
  }

  @Query(() => CarModel, { name: 'car' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carsService.findOne(id);
  }

  @Mutation(() => CarModel)
  updateCar(@Args('updateCarInput') updateCarInput: UpdateCarInput) {
    return this.carsService.update(updateCarInput.id, updateCarInput);
  }

  @Mutation(() => Boolean)
  removeCar(@Args('id', { type: () => Int }) id: number) {
    return this.carsService.remove(id);
  }
}
