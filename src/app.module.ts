import { Module } from '@nestjs/common';
import { _controllerModule } from './controller/_controller.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'process';
import { ConfigModule } from '@nestjs/config';
import { _entityModule, entityExports } from './entity/_entity.module';
import { Modality } from './entity/modality';

@Module({
  imports: [
    _controllerModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number.parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: entityExports,
      synchronize: true,
    }),
    _entityModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
