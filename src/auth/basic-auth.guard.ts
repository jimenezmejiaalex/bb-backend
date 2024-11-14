import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  constructor(private userService: UsersService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Basic ')) {
      throw new UnauthorizedException(
        'Missing or invalid Authorization header',
      );
    }

    // Decode the base64-encoded part after "Basic "
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString();

    // Split username and password
    const [username, password] = credentials.split(':');

    if (!username || !password) {
      throw new UnauthorizedException('Invalid credentials format');
    }

    const appUser = await this.userService.validateCredentials(
      username,
      password,
    );

    if (appUser === null || appUser === undefined) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Attach username and password to request object (optional)
    request.username = appUser.username;
    request.password = appUser.password;

    return true; // Allow access
  }
}
