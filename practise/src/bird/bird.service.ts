import { Injectable } from '@nestjs/common'

@Injectable()
export class BirdService {
    chirp(): string {
        return '我是小鸟叽叽叽'
    }
}
