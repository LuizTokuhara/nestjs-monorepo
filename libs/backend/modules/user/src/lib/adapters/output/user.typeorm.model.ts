import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserTypeOrmModel extends BaseEntity {
  @PrimaryColumn({
    name: 'id',
    type: 'uuid',
    primaryKeyConstraintName: 'pk_user_id',
  })
  public id: string;

  @Column({
    name: 'first_name',
    length: 50
  })
  public firstName: string;

  @Column({
    name: 'last_name',
    length: 50
  })
  public lastName: string;

  @Column({
    name: 'email',
    length: 100
  })
  public email: string;

  @Column({ 
    name: 'password' 
  })
  public password: string;

  @Column({ 
    name: 'salt_key' 
  })
  public saltKey: string;

  @CreateDateColumn({
    name: 'created_at'
  })
  public createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at'
  })
  public updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at'
  })
  public deletedAt: Date;

}