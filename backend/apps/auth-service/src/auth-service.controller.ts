import { Controller, Post, Body } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthServiceController {
  constructor(private readonly authService: AuthServiceService) { }

  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
