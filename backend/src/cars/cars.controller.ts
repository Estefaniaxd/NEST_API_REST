import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  /**
   * POST /cars
   * Crea un nuevo carro
   */
  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  /**
   * GET /cars
   * Devuelve todos los carros
   */
  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  /**
   * GET /cars/:id
   * Devuelve un carro específico según su ID
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id); // "+" convierte string a número
  }

  /**
   * PATCH /cars/:id
   * Actualiza parcialmente un carro
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  /**
   * PUT /cars/:id
   * Reemplaza completamente un carro (todos los campos)
   */
  @Put(':id')
  replace(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(+id, updateCarDto);}

  /**
   * DELETE /cars/:id
   * Elimina un carro por su ID
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
