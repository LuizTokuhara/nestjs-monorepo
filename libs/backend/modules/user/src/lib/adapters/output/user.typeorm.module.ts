import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeOrmModel } from './user.typeorm.model';
import { USER_CONNECTION } from './typeorm-const';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        UserTypeOrmModel
      ],
      USER_CONNECTION
    )
  ]
})
export class UserTypeOrmModule {}