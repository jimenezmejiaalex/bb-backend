import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  ScanCommand,
  UpdateCommand,
} from '@aws-sdk/lib-dynamodb';
import { Inject, Injectable } from '@nestjs/common';
import { DYNAMODB_CLIENT } from 'src/config/config.module';

@Injectable()
export class DynamoService {
  private readonly client: DynamoDBDocumentClient;

  constructor(@Inject(DYNAMODB_CLIENT) dynamoDBClient: DynamoDBClient) {
    this.client = DynamoDBDocumentClient.from(dynamoDBClient);
  }

  async putItem(params) {
    return this.client.send(new PutCommand(params));
  }

  async scanTable(params) {
    return this.client.send(new ScanCommand(params));
  }

  // Find a single item by its primary key (using GetCommand)
  async findOne(
    tableName: string,
    primaryKey: string,
    primaryKeyValue: string,
  ) {
    const params = {
      TableName: tableName,
      Key: {
        [primaryKey]: primaryKeyValue,
      },
    };
    return this.client.send(new GetCommand(params));
  }

  // Get a specific number of items (e.g., the first 3 items)
  async getByLimit(tableName: string, amount: number) {
    const params = {
      TableName: tableName,
      Limit: amount, // This will limit the results to the specified number
    };
    return this.client.send(new ScanCommand(params));
  }

  // Update an existing item in DynamoDB (use UpdateCommand to specify the update operation)
  async updateItem(
    tableName: string,
    primaryKey: string,
    primaryKeyValue: string,
    updateExpression: string,
    expressionValues: any,
  ) {
    const params = {
      TableName: tableName,
      Key: {
        [primaryKey]: primaryKeyValue,
      },
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: expressionValues,
      ReturnValues: 'ALL_NEW', // This will return the updated item
    };
    return this.client.send(new UpdateCommand(params));
  }
}
