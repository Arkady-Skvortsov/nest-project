"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    try {
        const PORT = process.env.PORT || 4500;
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Full CRUD app with 2 JWT Tokens (ACCESS, REFRESH)')
            .setDescription('Simple CRUD operation app, which had been done with Nest.js')
            .setVersion('2.0')
            .addTag('Nest.js')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('/docs/api', app, document);
        await app.listen(PORT, () => console.log(`Server had been started on the ${PORT}`));
    }
    catch (e) {
        console.log(e);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map