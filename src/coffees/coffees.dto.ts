import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  name: string;

  @IsString()
  brand: string;

  @IsString({ each: true }) // each value is a string
  flavours: string[];
}

// same type as CreateCoffeeDto but with all of the properties set to optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
