import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseUserEntity {
  @PrimaryGeneratedColumn('uuid')
  userID: string;
  @Column('text')
  name: string;
  @Column('text')
  email: string;
  @Column('text')
  password: string;
  @Column('text')
  phoneNumber: string;
  @Column('text')
  avatar: string;
  @Column('text')
  type: string;
  @Column('boolean')
  isActive: boolean;
}
