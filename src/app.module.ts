import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesController } from './roles/roles.controller';
import { RolesModule } from './roles/roles.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_DATABASE}.5lkfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    ),
    AppModule,
    UsersModule,
    RolesModule,
  ],
})
export class AppModule {}
