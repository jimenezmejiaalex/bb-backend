import { Injectable, Logger } from '@nestjs/common';
import { DynamoService } from 'src/database/dynamo/dynamo.service';
import { v4 as uuidv4 } from 'uuid';
import { CreateBrewMethodDto } from './dto/create-brew-method.dto';
import { UpdateBrewMethodDto } from './dto/update-brew-method.dto';
import { BrewMethod } from './entities/brew-method.entity';

@Injectable()
export class BrewMethodService {
  private readonly tableName = 'bb-brew-method';
  private readonly logger = new Logger('BrewMethodService');

  constructor(private dynamoService: DynamoService) {}

  async create(createBrewMethodDto: CreateBrewMethodDto) {
    try {
      this.logger.log('Create Brew Method started');
      const coffee = {
        id: uuidv4(),
        ...createBrewMethodDto,
      };
      const params = {
        TableName: this.tableName,
        Item: coffee,
      };
      await this.dynamoService.putItem(params);
      this.logger.log('Create Brew Method success');
    } catch (ex) {
      console.error(ex);
      this.logger.log('Create Brew Method failed');
    }
  }

  async findAll() {
    try {
      this.logger.log('Find All Brew Method started');
      const params = {
        TableName: this.tableName,
      };
      const result = await this.dynamoService.scanTable(params);
      this.logger.log('Find All Brew Method success');
      return result.Items as BrewMethod[];
    } catch (ex) {
      console.error(ex);
      this.logger.log('Find All Brew Method failed');
      return [];
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} brewMethod`;
  }

  update(id: number, updateBrewMethodDto: UpdateBrewMethodDto) {
    return `This action updates a #${id} brewMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} brewMethod`;
  }
}
