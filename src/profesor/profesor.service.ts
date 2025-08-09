import { Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';

@Injectable()
export class ProfesorService {
  create(createProfesorDto: CreateProfesorDto) {
    return 'se ha creado un nuevo profesor';
  }

  findAll() {
    return `se han encontrado todos los profesores`;
  }

  findOne(id: number) {
    return `se ha encontrado el profesor con el ID: ${id}`;
  }

  update(id: number, updateProfesorDto: UpdateProfesorDto) {
    return `se ha actualizado el estudiante con el ID: ${id}`;
  }

  remove(id: number) {
    return `se ha eliminado el profesor con el ID: ${id}`;
  }
}
