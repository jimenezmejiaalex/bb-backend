import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { StepType } from '../enums/step-type.enum';

export class StepResponseDto {
  id: string;

  @IsString()
  name: string;

  @IsEnum(StepType)
  type: StepType;

  @IsNumber()
  duration: number; // Duration in seconds

  @IsNumber()
  quantity: number; // Amount in grams or milliliters

  @IsOptional()
  @IsString()
  notes?: string; // Optional field for additional notes

  @IsNumber()
  order: number; // Order of the step in the brew process

  createdAt: Date;
  updatedAt: Date;
}
