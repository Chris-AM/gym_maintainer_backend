import { ExcerciseEntity } from 'src/features/excercise/domain/excercise.entity';
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
  @ManyToOne(() => ExcerciseEntity, (excercise) => excercise.video, {
    eager: true,
  })
  excercise: ExcerciseEntity;
}
