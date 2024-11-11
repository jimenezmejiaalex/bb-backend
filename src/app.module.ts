import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeModule } from './coffee/coffee.module';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { BrewMethodModule } from './brew-method/brew-method.module';
import { EquipmentModule } from './equipment/equipment.module';

@Module({
  imports: [
    CoffeeModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AppConfigModule,
    DatabaseModule,
    BrewMethodModule,
    EquipmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
