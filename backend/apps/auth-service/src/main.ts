import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AuthServiceModule } from './auth-service.module';

async function bootstrap() {
  const logger = new Logger('AuthService');
  const app = await NestFactory.create(AuthServiceModule);
  const port = 3001;
  await app.listen(port);
  logger.log(`Auth Service is running on port: ${port} 🚀`);
}
bootstrap();
