/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-04-06 21:48:59
 */
import { Injectable } from '@nestjs/common'
let dogIQ = 57

@Injectable()
export class DogService {
  takeHowl(): string {
    dogIQ -= 3
    if (dogIQ > 10) {
      return `I wanna wowowo, my IQ is ${dogIQ}`
    } else {
      return 'Could U tell me Who I am'
    }
  }
}
