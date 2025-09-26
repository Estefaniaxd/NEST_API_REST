import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CursosService {
  constructor(private prismaService: PrismaService) {}

  create(createCursoDto: CreateCursoDto) {
    return this.prismaService.cursos.create({
      data: {
        descripcion: createCursoDto.descripcion,
        nombre: createCursoDto.nombre,
        precio: createCursoDto.precio,
      },
    });
  }

  findAll() {
    return this.prismaService.cursos.findMany();
  }

  findOne(id: number) {
    return this.prismaService.cursos.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return `This action updates a #${id} curso`;
  }

  remove(id: number) {
    return `This action removes a #${id} curso`;
  }
}
