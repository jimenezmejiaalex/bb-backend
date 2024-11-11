import { Type } from 'class-transformer';
import { IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { RoastLevel } from '../enums/roastLevel.enum';
import { CreateTraceabilityDto } from './create-traceability.dto';

export class CreateCoffeeDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(RoastLevel)
  roasted: RoastLevel;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateTraceabilityDto)
  traceability?: CreateTraceabilityDto;
}
