import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseUserEntity } from '../../domain/base-user.entity';

export class WorkerUserEntity extends BaseUserEntity {
  @PrimaryGeneratedColumn('increment')
  workerId: number;
  @Column('text')
  dni: string;
}
