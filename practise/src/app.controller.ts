/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-04-02 11:32:51
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('news')
  getNews(): string {
    return '这是我自定义的news路由'
  }

  @Get('product')
  getProduct(): string {
    return 'product'
  }
}
