/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-04-06 21:39:53
 */

import { Controller, Get, Query, Request } from '@nestjs/common'

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'I find a miaomiao'
  }

  @Get('analyse')
  getAna(@Query() query) {
    console.log('当前query是：', query)
    return query
  }

  @Get('paramsreq')
  getReq(@Request() req) {}
}
