import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export const DYNAMODB_CLIENT = 'DYNAMODB_CLIENT';
@Module({
  // imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [
    {
      provide: DYNAMODB_CLIENT,
      useFactory: (configService: ConfigService) => {
        const REGION = configService.get<string>('AWS_REGION');
        return new DynamoDBClient({
          region: REGION,
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [DYNAMODB_CLIENT],
})
export class AppConfigModule {}
