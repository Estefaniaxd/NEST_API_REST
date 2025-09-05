import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  create(createCarDto: CreateCarDto) {
    return 'se ha creado un carro';
  }

  findAll() {
    return `se han encontrado todos los carros`;
  }

  findOne(id: number) {
    return `se ha encontrado el carro con el ID:${id}`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `se ha actualizado el carro con el ID:${id}`;
  }

  remove(id: number) {
    return `se ha eliminado el carro con el ID:${id}`;
  }
}
