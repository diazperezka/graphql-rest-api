import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsEntity } from './cars.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarsEntity])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
