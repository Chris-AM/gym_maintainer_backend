import { ExcerciseEntity } from 'src/features/excercise/domain/excercise.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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
}
