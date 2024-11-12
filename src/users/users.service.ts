import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UsersService {
  private readonly user: User;
  constructor(private readonly configService: ConfigService) {
    const username = this.configService.get<string>('USERNAME');
    const password = this.configService.get<string>('PASSWORD');
    const userId = this.configService.get<string>('USER_ID');
    this.user = {
      username,
      password,
      userId,
    };
  }
  async validate(username: string): Promise<User | undefined> {
    if (username === this.user.username) {
      return this.user;
    }
    return undefined;
  }
}
