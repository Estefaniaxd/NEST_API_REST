import { Module } from '@nestjs/common';
import { ProfesorModule } from './profesor/profesor.module';

@Module({
  imports: [ProfesorModule],
})
export class AppModule {}
