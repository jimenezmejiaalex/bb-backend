import { IsEnum, IsString } from 'class-validator';
import { EquipmentType } from '../enums/equipment.enum';

export class Equipment {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(EquipmentType)
  type: EquipmentType;
}
