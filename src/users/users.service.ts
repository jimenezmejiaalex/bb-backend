import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private user: User;

  constructor(private readonly configService: ConfigService) {
    this.initializeUser();
  }

  private async initializeUser() {
    const plainUsername = this.configService.get<string>('USERNAME');
    const plainPassword = this.configService.get<string>('PASSWORD');
    const userId = this.configService.get<string>('USER_ID');

    this.user = {
      username: plainUsername,
      password: plainPassword,
      userId,
    };
  }
  validate(username: string): User | undefined {
    if (username === this.user.username) {
      return this.user;
    }
    return undefined;
  }

  async validateCredentials(
    username: string,
    password: string,
  ): Promise<User | undefined> {
    const userNameMatches: boolean = await bcrypt.compare(
      this.user.username,
      username,
    );

    const passwordMatches: boolean = await bcrypt.compare(
      this.user.password,
      password,
    );

    if (passwordMatches && userNameMatches) {
      return this.user;
    }

    return undefined;
  }
}
