import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
export class CarsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  year: number;
}
