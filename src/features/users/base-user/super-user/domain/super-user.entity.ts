import { Entity } from 'typeorm';
import { BaseUserEntity } from '../../domain/base-user.entity';

@Entity('super-user')
export class SuperUserEntity extends BaseUserEntity {
  
  dni: string;
  gymId: string;
  gymName: string;
  direction: string;

  constructor() {
    super();
    this.type = 'super';
  }
}
