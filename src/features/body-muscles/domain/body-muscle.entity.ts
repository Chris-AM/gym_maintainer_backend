import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExerciseEntity } from 'src/features/exercise/domain/exercise';
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
  @ManyToMany(() => ExerciseEntity, (exercise) => exercise.focus, {})
  @JoinTable()
  bestExercises: ExerciseEntity[];
  @OneToOne(() => BodyMuscleIconEntity, (icon) => icon.bodyMuscle)
  icon: BodyMuscleIconEntity;
}
