import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CoffeeController],
  providers: [CoffeeService],
})
export class CoffeeModule {}
