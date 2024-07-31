import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Use `PORT` provided in environment or default to 3000
const port = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, '0.0.0.0');
}
bootstrap();
