import { Injectable } from '@nestjs/common';
import { CreateCarInput } from './dto/input/create-car.input';
import { UpdateCarInput } from './dto/input/update-car.input';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class CarsService {
  private backend_cars: string;
  constructor(private readonly configService: ConfigService) {
    this.backend_cars = this.configService.get<string>('backend_cars');
  }

  async create(createCarInput: CreateCarInput) {
    const response = await axios.post(`${this.backend_cars}`, createCarInput);

    return response.data;
  }

  async findAll() {
    const response = await axios.get(`${this.backend_cars}`);
    return response.data.data;
  }

  async findOne(id: number) {
    const response = await axios.get(`${this.backend_cars}/${id}`);
    return response.data.data;
  }

  async update(id: number, updateCarInput: UpdateCarInput) {
    const response = await axios.patch(
      `${this.backend_cars}/${id}`,
      updateCarInput,
    );

    return response.data;
  }

  async remove(id: number) {
    const response = await axios.delete(`${this.backend_cars}/${id}`);

    return response.data;
  }
}
