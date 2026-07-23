import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ProductServiceModule } from './product-service.module';

async function bootstrap() {
  const logger = new Logger('ProductService');
  const app = await NestFactory.create(ProductServiceModule);
  const port = 3002;
  await app.listen(port);
  logger.log(`Product Service is running on port: ${port} 🚀`);
}
bootstrap();
