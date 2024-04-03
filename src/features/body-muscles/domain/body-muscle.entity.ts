import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExcerciseEntity } from 'src/features/excercise/domain/excercise.entity';
import { BodyMuscleIconEntity } from './body-muscle.icon';

export type BodyMuscleDocument = BodyMuscleEntity & Document;

@Entity('body-muscle')
export class BodyMuscleEntity {
  @PrimaryGeneratedColumn('uuid')
  muscleId: string;
  @Column('text')
  name: string;
  @Column('text')
  description: string;
  @ManyToMany(() => ExcerciseEntity, (excercise) => excercise.focus, {})
  @JoinTable()
  bestExcercises: ExcerciseEntity[];
  @OneToOne(() => BodyMuscleIconEntity, (icon) => icon.bodyMuscle)
  icon: BodyMuscleIconEntity;
}
