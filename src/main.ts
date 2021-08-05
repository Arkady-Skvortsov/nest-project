import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 4500;
    const app = await NestFactory.create(AppModule);

    await app.listen(PORT, () =>
      console.log(`Server had been started on the ${PORT}`),
    );
  } catch (e) {
    console.log(e);
  }
}

bootstrap();
