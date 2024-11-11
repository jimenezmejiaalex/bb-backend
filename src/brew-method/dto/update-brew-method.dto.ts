import { PartialType } from '@nestjs/mapped-types';
import { CreateBrewMethodDto } from './create-brew-method.dto';

export class UpdateBrewMethodDto extends PartialType(CreateBrewMethodDto) {}
