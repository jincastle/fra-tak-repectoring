import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(process.env.NODE_ENV);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = +process.env.NODE_SERVER_PORT;
  await app.listen(port);
}
bootstrap();
