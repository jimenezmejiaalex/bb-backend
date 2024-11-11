import { RoastLevel } from '../enums/roastLevel.enum';
import { Traceability } from './traceability.entity';

export class Coffee {
  coffeeId: string;
  name: string;
  description?: string;
  roasted: RoastLevel;
  traceability?: Traceability;
}
