import { Injectable, Logger } from '@nestjs/common';
import { DynamoService } from 'src/database/dynamo/dynamo.service';
import { v4 as uuidv4 } from 'uuid';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeeService {
  private readonly tableName = 'bb-coffee';
  private readonly logger = new Logger('CoffeeService');
  constructor(private dynamoService: DynamoService) {}
  async create(createCoffeeDto: CreateCoffeeDto) {
    try {
      this.logger.log('Create coffee started');
      const coffee = {
        coffeeId: uuidv4(),
        ...createCoffeeDto,
      };
      const params = {
        TableName: this.tableName,
        Item: coffee,
      };
      await this.dynamoService.putItem(params);
      this.logger.log('Create coffee success');
    } catch (ex) {
      console.error(ex);
      this.logger.log('Create coffee failed');
    }
  }

  async findAll() {
    try {
      this.logger.log('Find All coffee started');
      const params = {
        TableName: this.tableName,
      };
      const result = await this.dynamoService.scanTable(params);
      const coffees = result.Items as Coffee[];
      const resultMapped = coffees.map(({ name, description, coffeeId }) => ({
        name,
        description,
        id: coffeeId,
      }));

      this.logger.log('Find All coffee success');
      return resultMapped;
    } catch (ex) {
      console.error(ex);
      this.logger.log('Find All coffee failed');
      return [];
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} coffee`;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    return `This action updates a #${id} coffee`;
  }

  remove(id: number) {
    return `This action removes a #${id} coffee`;
  }
}
