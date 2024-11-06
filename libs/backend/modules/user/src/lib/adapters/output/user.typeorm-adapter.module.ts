import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './typeorm-config.service';
import { DataSource, DataSourceOptions } from 'typeorm';
import { USER_CONNECTION } from './typeorm-const';
import { UserTypeOrmModule } from './user.typeorm.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: USER_CONNECTION,
      imports: [],
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options: DataSourceOptions | undefined) => {
        if (!options) {
          throw new Error('DataSourceOptions is undefined');
        }
        const dataSource = new DataSource(options);
        await dataSource.initialize();
        return dataSource;
      }
    }),
    UserTypeOrmModule
  ],
  exports: [UserTypeOrmModule],
  providers: []
})
export class UserTypeOrmAdapterModule {}
