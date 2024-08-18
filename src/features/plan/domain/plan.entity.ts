import { ExerciseEntity } from 'src/features/exercise/domain/exercise';
import { CustomerEntity } from 'src/features/users/base-user/customer/domain/customer.entity';
import {
  Column,
  Entity,
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
  @OneToMany(() => ExerciseEntity, (exercise) => exercise.plan)
  exercises: ExerciseEntity[];
  @ManyToOne(() => CustomerEntity, (customers) => customers.plan)
  customers: CustomerEntity[];
}
