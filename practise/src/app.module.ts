/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-04-02 11:32:51
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cat.controller';
import { DogsController } from './dog.controller';
import { AppService } from './app.service';
import { DogService } from './dog.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, DogsController],
  providers: [AppService, DogService],
})
export class AppModule {}
