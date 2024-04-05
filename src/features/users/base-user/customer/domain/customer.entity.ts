import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseUserEntity } from '../../domain/base-user.entity';
import { CoachEntity } from '../../worker-user/coach/domain/coach.entity';
import { PlanEntity } from 'src/features/plan/domain/plan.entity';
import { ServiceEntity } from 'src/features/service/domain/service.entity';

@Entity('customer-user')
export class CustomerEntity extends BaseUserEntity {
  @PrimaryGeneratedColumn('increment')
  customerId: number;
  @ManyToOne(() => CoachEntity, (coach) => coach.students, {
    eager: true,
    cascade: true,
  })
  coach: CoachEntity;
  @ManyToOne(() => PlanEntity, (plan) => plan.customers, {
    eager: true,
    cascade: true,
  })
  plan: PlanEntity;
  @ManyToMany(() => ServiceEntity, (service) => service.studentsEnrolled, {
    eager: true,
    cascade: true,
  })
  servicesEnrolled: ServiceEntity[];
  constructor() {
    super();
    this.type = 'customer';
  }
}
