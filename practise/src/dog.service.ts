/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-04-06 21:48:59
 */
import { Injectable } from '@nestjs/common'

@Injectable()
export class DogService {
  takeHowl(): string {
    return 'I wanna wowowo'
  }
}
