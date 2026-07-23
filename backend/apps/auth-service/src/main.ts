import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AuthServiceModule } from './auth-service.module';

async function bootstrap() {
  const logger = new Logger('AuthService');
  const app = await NestFactory.create(AuthServiceModule);
  
  // Enable Global Validation Pipe for DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // strip out fields that are not in the DTO
  }));

  const port = process.env.PORT || 3001;
  await app.listen(port);
  logger.log(`Auth Service is running on port: ${port} 🚀`);
}
bootstrap();
