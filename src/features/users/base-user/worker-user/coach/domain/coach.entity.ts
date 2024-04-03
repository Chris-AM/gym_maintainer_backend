import { WorkerUserEntity } from '../../domain/worker-user.entity';
import { CustomerEntity } from '../../../customer/domain/customer.entity';
import { ServiceEntity } from 'src/features/service/domain/service.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('coach-user')
export class CoachEntity extends WorkerUserEntity {
  @PrimaryGeneratedColumn('increment')
  coachId: number;
  @Column('text')
  degree: string;
  @OneToMany(() => CustomerEntity, (customer) => customer.coach)
  students: CustomerEntity[];
  @OneToMany(() => ServiceEntity, (service) => service.chief, {
    eager: true,
    cascade: true,
  })
  servicesGiven: ServiceEntity[];
  constructor() {
    super();
    this.type = 'coach';
  }
}
