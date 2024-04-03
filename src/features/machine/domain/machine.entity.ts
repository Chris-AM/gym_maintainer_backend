import { ExcerciseEntity } from 'src/features/excercise/domain/excercise.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('machine')
export class MachineEntity {
  @PrimaryGeneratedColumn('uuid')
  machineId: string;
  @Column('text')
  name: string;
  @Column('text')
  type: string;
  @Column('text')
  brand: string;
  @Column('text')
  description: string;
  @Column('text')
  warnings: string;
  @ManyToMany(() => ExcerciseEntity, (excercise) => excercise.machine)
  @JoinTable()
  focus: ExcerciseEntity[];
}
