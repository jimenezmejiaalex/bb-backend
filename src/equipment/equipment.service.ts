import { Injectable, Logger } from '@nestjs/common';
import { DynamoService } from 'src/database/dynamo/dynamo.service';
import { v4 as uuidv4 } from 'uuid';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { Equipment } from './entities/equipment.entity';

@Injectable()
export class EquipmentService {
  private readonly tableName = 'bb-equipment';
  private readonly logger = new Logger('EquipmentService');

  constructor(private dynamoService: DynamoService) {}

  async create(createEquipmentDto: CreateEquipmentDto) {
    try {
      this.logger.log('Create Equipment started');
      const coffee = {
        id: uuidv4(),
        ...createEquipmentDto,
      };
      const params = {
        TableName: this.tableName,
        Item: coffee,
      };
      await this.dynamoService.putItem(params);
      this.logger.log('Create Equipment success');
    } catch (ex) {
      console.error(ex);
      this.logger.log('Create Equipment failed');
    }
  }

  async findAll() {
    try {
      this.logger.log('Find All Equipment started');
      const params = {
        TableName: this.tableName,
      };
      const result = await this.dynamoService.scanTable(params);
      this.logger.log('Find All Equipment success');
      return result.Items as Equipment[];
    } catch (ex) {
      console.error(ex);
      this.logger.log('Find All Equipment failed');
      return [];
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} equipment`;
  }

  update(id: number, updateEquipmentDto: UpdateEquipmentDto) {
    return `This action updates a #${id} equipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipment`;
  }
}
