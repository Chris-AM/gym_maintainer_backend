import { ExerciseEntity } from 'src/features/exercise/domain/exercise';
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
  @ManyToMany(() => ExerciseEntity, (exercise) => exercise.machine)
  @JoinTable()
  focus: ExerciseEntity[];
}
