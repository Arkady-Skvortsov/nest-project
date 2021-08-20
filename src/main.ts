import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 4500;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle('Full CRUD app with 2 JWT Tokens (ACCESS, REFRESH)')
      .setDescription(
        'Simple CRUD operation app, which had been done with Nest.js',
      )
      .setVersion('2.0')
      .addTag('Nest.js')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/docs/api', app, document);

    await app.listen(PORT, () =>
      console.log(`Server had been started on the ${PORT}`),
    );
  } catch (e) {
    console.log(e);
  }
}

bootstrap();
