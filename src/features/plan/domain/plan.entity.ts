import { ExcerciseEntity } from 'src/features/excercise/domain/excercise.entity';
import { CustomerEntity } from 'src/features/users/base-user/customer/domain/customer.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('plan')
export class PlanEntity {
  @PrimaryGeneratedColumn('uuid')
  planId: string;
  @Column('text')
  name: string;
  @Column('text')
  description: string;
  @Column('int')
  price: number;
  @Column('int')
  duration: number;
  @Column('boolean')
  isActive: boolean;
  @Column('int')
  daysAWeek: number;
  @OneToMany(() => ExcerciseEntity, (excercise) => excercise.plan)
  excercises: ExcerciseEntity[];
  @ManyToOne(() => CustomerEntity, (customers) => customers.plan)
  customers: CustomerEntity[];
}
