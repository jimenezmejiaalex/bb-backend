import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateTraceabilityDto {
  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  @IsString()
  variety?: string;

  @IsOptional()
  @IsString()
  process?: string;

  @IsOptional()
  @IsInt()
  altitude?: number;
}
