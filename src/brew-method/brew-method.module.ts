import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BrewMethodController } from './brew-method.controller';
import { BrewMethodService } from './brew-method.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BrewMethodController],
  providers: [BrewMethodService],
})
export class BrewMethodModule {}
