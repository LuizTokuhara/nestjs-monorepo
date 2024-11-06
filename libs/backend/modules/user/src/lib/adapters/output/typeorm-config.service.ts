import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    const dbName = process.env['DB_NAME'];
    const dbHost = process.env['DB_HOST'];
    const dbPort = Number(process.env['DB_PORT']);
    const dbUser = process.env['DB_USERNAME'];
    const dbPassword = process.env['DB_PASSWORD'];

    return {
      type: 'mysql',
      host: dbHost,
      port: dbPort,
      username: dbUser,
      password: dbPassword,
      database: dbName,
      synchronize: false,
      entities: []
    }
  }
}