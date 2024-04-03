import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ExcerciseEntity } from 'src/features/excercise/domain/excercise.entity';

export type BodyMuscleDocument = BodyMuscleEntity & Document;

@Entity('body-muscle')
export class BodyMuscleEntity {
  @PrimaryGeneratedColumn('uuid')
  muscleId: string;
  @Column('text')
  name: string;
  @Column('text')
  description: string;
  @Column('text')
  icon: string;

  bestExcercises: ExcerciseEntity[];
}
