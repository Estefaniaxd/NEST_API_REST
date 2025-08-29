import { Controller, Get, Param } from '@nestjs/common';
import { ProfesorService } from './profesor.service';

@Controller('profesor') // <- Esta es la ruta base /profesor
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Get()
  findAll() {
    return this.profesorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesorService.findOne(+id);
  }
}
