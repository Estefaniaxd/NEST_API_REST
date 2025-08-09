import { Injectable } from '@nestjs/common';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';

@Injectable()
export class AdministradorService {
  create(createAdministradorDto: CreateAdministradorDto) {
    return 'se ha creado un nuevo adminsitrador';
  }

  findAll() {
    return `se han encontrado todos los administradores`;
  }

  findOne(id: number) {
    return `se ha encontrado el administrador con el ID: ${id}`;
  }

  update(id: number, updateAdministradorDto: UpdateAdministradorDto) {
    return `se ha actualizado el administrador con el ID: ${id}`;
  }

  remove(id: number) {
    return `se ha eliminado el administrador con el ID: ${id}`;
  }
}
