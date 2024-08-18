import { ExerciseEntity } from 'src/features/exercise/domain/exercise';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('video')
export class VideoEntity {
  @PrimaryGeneratedColumn('uuid')
  videoId: string;
  @Column('text')
  name: string;
  @Column('text')
  url: string;
  @Column('text')
  description: string;
  @ManyToOne(() => ExerciseEntity, (exercise) => exercise.video, {
    eager: true,
  })
  exercise: ExerciseEntity;
}
