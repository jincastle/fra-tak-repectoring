import {
  Body,
  Controller,
  Post,
  Req,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { HttpExceptionFilter } from 'src/common/http-exception.fliter';
import { SuccessInterceptor } from 'src/common/success.intercetor';
import { UserRequestDto } from './dto/users.request.dto';
import { UsersService } from './users.service';

@Controller('users')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '회원가입' })
  @Post('signup')
  async signUp(@Body() body: UserRequestDto) {
    return await this.usersService.signUp(body);
  }
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogIn(data);
  }
}
