import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from 'process';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api')
  app.use(cookieParser());
  app.enableCors(
    {
      origin: ['http://localhost:3000'],
      credentials: true,
      exposedHeaders: 'set-cookie',
    }
  );

  await app.listen(env.PORT ?? 4200); // 8080
}
bootstrap();

// https://www.youtube.com/watch?v=-7K_0NRLCu4&list=PLG3k6fiOzfyMk72M0DU4gK5gJS_ZFZ2RQ

// 30.00 - nestjs создание и тд
// 37/30 - настройка prisma
// 54.50 - настройка prisma в самом nestjs


// 1.03 - авторизация
// 1.22 - логин и регистрация 
// 1.46 закончил

// $ nest generate module test
// $ nest generate controller test
// $ nest generate service test

// nest g resource post --no-spec !!!!!!!
