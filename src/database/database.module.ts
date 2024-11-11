import { Module } from '@nestjs/common';
import { AppConfigModule } from 'src/config/config.module';
import { DynamoService } from './dynamo/dynamo.service';

@Module({
  imports: [AppConfigModule],
  providers: [DynamoService],
  exports: [DynamoService],
})
export class DatabaseModule {}
