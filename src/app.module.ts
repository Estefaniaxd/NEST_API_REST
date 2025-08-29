import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { AdministradorModule } from './administrador/administrador.module';
import { ProfesorModule } from './profesor/profesor.module';
import { PrismaModule } from './prisma/prisma.module';
import { MarcasModule } from './marcas/marcas.module';
import { CursosModule } from './cursos/cursos.module';
import { AlumnosModule } from './alumnos/alumnos.module';

@Module({
  imports: [CarsModule, EstudianteModule, AdministradorModule, ProfesorModule, PrismaModule, MarcasModule, CursosModule, AlumnosModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
