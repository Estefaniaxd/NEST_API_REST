import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Injectable()
export class EstudianteService {
  create(createEstudianteDto: CreateEstudianteDto) {
    return 'se ha creado un nuevo estudiante';
  }

  findAll() {
    return `se han encontrado todos los estudiantes`;
  }

  findOne(id: number) {
    return `se ha encontrado el estudiante con el ID: ${id}`;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `se ha actualizado el estudiante con el ID: ${id}`;
  }

  remove(id: number) {
    return `se ha eliminado el estudiante con el ID: ${id}`;
  }
}
