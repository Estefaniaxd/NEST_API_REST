import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateCursoDto {

    @IsNotEmpty({message: 'El nombre es obligatorio'})
    nombre: string;
    @IsOptional({message: 'El campo descripcion es opcional'})
    descripcion: string;
    @IsNumber({}, { message: 'El precio debe ser un número' })
    precio: number;
    @IsNumber({}, { message: 'El id debe ser un número' })
    id: number;

}
