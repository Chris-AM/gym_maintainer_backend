import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseUserEntity } from '../../domain/base-user.entity';

@Entity('super-user')
export class SuperUserEntity extends BaseUserEntity {
  @PrimaryColumn('text')
  dni: string;
  @Column('text')
  gymId: string;
  @Column('text')
  gymName: string;
  @Column('text')
  direction: string;

  constructor() {
    super();
    this.type = 'super';
  }
}
