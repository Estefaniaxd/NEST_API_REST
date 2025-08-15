import { Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { Profesor } from './entities/profesor.entity';

@Injectable()
export class ProfesorService {
  private profesores: Profesor [] = [
      new Profesor(1,"valentina","ruiz", "valentina@ARP.edu.co","casa de los famosos","foto","hola a todos","302223531"),
      new Profesor(2,"carolina","villamarin", "carolina@EstARP.edu.co","libro","foto","hola","308763423"),
    ]
  create(createProfesorDto: CreateProfesorDto) {
    return 'se ha creado un nuevo profesor';
  }

  findAll() {
    return this.profesores;
  }

  findOne(id: number) {
    return this.profesores.find(function(profesor){
      return profesor.id === id
    })
  }

  update(id: number, updateProfesorDto: UpdateProfesorDto) {
    return `se ha actualizado el estudiante con el ID: ${id}`;
  }

  remove(id: number) {
    this.profesores = this.profesores.filter(function(profe){
      return profe.id !== id
    });
  }
}
