import { Module } from '@nestjs/common';
import { UserTypeOrmAdapterModule } from './adapters';

@Module({
  imports: [
    UserTypeOrmAdapterModule
  ],
  providers: [],
  exports: [UserTypeOrmAdapterModule],
})
export class UserModule {}
