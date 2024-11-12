import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger('AuthService');
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    this.logger.log('Authenticate User started');
    const user = await this.usersService.validate(username);
    if (user?.password !== pass) {
      this.logger.log('Authenticate User Failed');
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username };
    this.logger.log('Authenticate User Success');
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
