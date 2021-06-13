import { Controller, Get } from '@nestjs/common'
import { BirdService } from './bird.service'

@Controller()
export class BirdController {
    constructor(private readonly birdService: BirdService) {}

    @Get()
    chirp(): string {
        return this.birdService.chirp();
    }
}
