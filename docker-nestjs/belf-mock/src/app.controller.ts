import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller(':id')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('glass')
  getPlantingGlass(@Param() params) {
    console.log(params);
    return this.appService.getPlantingGlass(params.id);
  }
}
