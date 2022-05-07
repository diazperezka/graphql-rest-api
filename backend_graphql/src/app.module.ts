import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersService } from './users/users.service';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    UsersModule,
    CarsModule,
  ],
  controllers: [],
  providers: [UsersService, CarsService],
})
export class AppModule {}
