import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class MarcasService {

  constructor(private servicio: PrismaService) { }

  create(createMarcaDto: CreateMarcaDto) {
    return this.servicio.marcas
    
  }

  findAll() {
    return this.servicio.marcas.findMany()
  }

  findOne(id: number) {
    return this.servicio.marcas.findFirst({where: {id}})
  }

  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    return this.servicio.marcas.updateMany({where: {id}, data: updateMarcaDto})
  }

  remove(id: number) {
    return this.servicio.marcas.deleteMany({where: {id}})
  }
}
