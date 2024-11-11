import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { BrewType } from '../enums/brew-type.enum';

export class BrewMethodResponseDto {
  id: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(BrewType)
  type: BrewType;

  @IsOptional()
  @IsNumber()
  brewTime?: number;

  @IsOptional()
  @IsString()
  grindSize?: string;

  @IsOptional()
  @IsNumber()
  waterTemp?: number;

  @IsOptional()
  @IsNumber()
  waterRatio?: number;

  @IsOptional()
  @IsString()
  equipment?: string;

  @IsOptional()
  @IsNumber()
  idealYield?: number;

  @IsOptional()
  @IsString()
  flavorProfile?: string;

  @IsOptional()
  @IsArray()
  @Type(() => String)
  steps?: string[]; // Assuming it's a list of step IDs or similar references

  createdAt: Date;
  updatedAt: Date;
}
