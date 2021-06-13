/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-04-06 21:39:53
 */

import { Controller, Get, Post, Query, Request } from '@nestjs/common'

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'I find a miaomiao'
  }

  // 以下是两种get获取url参数的方法
  @Get('analyse')
  getAna(@Query() query) {
    console.log('当前query是：', query)
    return query
  }

  @Get('paramsreq')
  getReq(@Request() req) {
    console.log(req.query)
  }

  @Post('entrypost')
  entrypost() {
    return '访问了post方法'
  }
}
