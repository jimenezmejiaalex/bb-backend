import { PartialType } from '@nestjs/mapped-types';
import { CreateStepDto } from '../../brew-method/dto/create-step.dto';

export class UpdateStepDto extends PartialType(CreateStepDto) {}
