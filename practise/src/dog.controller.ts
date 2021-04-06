/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-04-06 21:44:48
 */

import { Controller, Get } from '@nestjs/common'
import { DogService } from './dog.service'

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  takeHowl(): string {
    return this.dogService.takeHowl()
  }
}
