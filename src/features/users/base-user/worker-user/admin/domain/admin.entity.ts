import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { WorkerUserEntity } from '../../domain/worker-user.entity';

@Entity('admin-user')
export class AdminEntity extends WorkerUserEntity {
  @PrimaryGeneratedColumn('increment')
  adminId: number;
  @Column('text')
  area: string;
  constructor() {
    super();
    this.type = 'admin';
  }
}
