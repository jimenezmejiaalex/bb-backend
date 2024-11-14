import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from 'src/decorators/public/public.decorator';
import { BasicAuthGuard } from './basic-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(BasicAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('login')
  signIn(@Req() req) {
    const { username, password } = req;
    return this.authService.signIn(username, password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
