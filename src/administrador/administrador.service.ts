import { administrador } from './entities/administrador.entity';
import { Injectable } from '@nestjs/common';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';

@Injectable()
export class AdministradorService {
  private administradores: administrador [] = [
    new administrador(1,"juan esteban","martinez macias", "juanitomm2408@gmail.com","holaMundo","foto","😪😪","302223531"),
    new administrador(2,"harrison david","guerrero palacios", "hguerrero@gmail.com","libro","foto","🫚🫚","308763423"),
  ]
  create(createAdministradorDto: CreateAdministradorDto) {
    return 'se ha creado un nuevo adminsitrador';
  }

  findAll() {
    return this.administradores;
  }

  findOne(id: number) {
    return this.administradores.find(function(admin){
      return admin.id === id
    })
  }

  update(id: number, updateAdministradorDto: UpdateAdministradorDto) {
    return `se ha actualizado el administrador con el ID: ${id}`;
  }

  remove(id: number) {
    this.administradores = this.administradores.filter(function(admin){
      return admin.id !== id
    });
  }
}
