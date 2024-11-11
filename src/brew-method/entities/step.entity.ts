import { StepType } from '../enums/step-type.enum';

export class Step {
  id: string;
  name: string;
  type: StepType;
  duration: number; // Duration in seconds
  quantity: number; // Amount in grams or milliliters
  notes?: string;
  order: number; // Step order in the process
  brewMethodId: string; // Associated BrewMethod ID
}
