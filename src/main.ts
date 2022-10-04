import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import * as expressBasicAuth from 'express-basic-auth';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/http-exception.fliter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new HttpExceptionFilter());
  const port = +process.env.NODE_SERVER_PORT;

  app.use(
    ['/api', 'api-json'],
    expressBasicAuth({
      challenge: true,
      users: { [process.env.SWAGGERID]: process.env.SWAGGERPW },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('C.I.C')
    .setDescription('api')
    .setVersion('1.0.0')
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: true,
    credentials: true,
  });
  await app.listen(port);
}
bootstrap();
