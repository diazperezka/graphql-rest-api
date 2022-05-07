import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarDto } from './cars.dto';
import { CarsEntity } from './cars.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(CarsEntity)
    private carsRepository: Repository<CarsEntity>,
  ) {}

  async create(data: CarDto) {
    try {
      const car = await this.carsRepository.save(data);
      return car;
    } catch (error) {
      console.log(error);
      return {
        error: error.message,
      };
    }
  }

  async findAll() {
    try {
      const data = await this.carsRepository.find();
      return {
        data,
        statusCode: 200,
      };
    } catch (error) {
      console.log(error);
      return {
        error: error.message,
      };
    }
  }

  async findOne(id: number) {
    const data = await this.carsRepository.findOne({ where: { id } });
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  async update(id: number, data: CarDto) {
    try {
      await this.carsRepository.update({ id }, data);
      return await this.carsRepository.findOne({ where: { id } });
    } catch (error) {
      console.log(error);
      return {
        error: error.message,
      };
    }
  }

  async remove(id: number) {
    await this.carsRepository.delete({ id });
    return true;
  }
}
