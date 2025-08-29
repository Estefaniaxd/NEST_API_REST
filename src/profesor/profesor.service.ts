
import { Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { Profesor } from './entities/profesor.entity';
import {PrismaService} from 'src/prisma/prisma.service'

@Injectable()
export class ProfesorService {
  

  constructor (private servicio : PrismaService){}




  findAll() {
    return this.servicio.profesor.findMany()
  } 

  findOne(id: number) {
  return this.servicio.profesor.findFirst({
  where:{id}

    })
      
  }



}
