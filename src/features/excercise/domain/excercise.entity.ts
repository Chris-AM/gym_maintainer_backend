import { BodyMuscleEntity } from 'src/features/body-muscles/domain/body-muscle.entity';
import { MachineEntity } from 'src/features/machine/domain/machine.entity';
import { VideoEntity } from 'src/features/video/domain/video.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export type ExcerciseDocument = ExcerciseEntity & Document;

@Entity('excercise')
export class ExcerciseEntity {
  @PrimaryGeneratedColumn('uuid')
  excerciseId: string;
  @Column('text')
  name: string;
  @Column('text')
  description: string;
  @Column('int')
  duration: number;
  @Column('int')
  calories: number;
  @Column('int')
  initValue: number;
  @Column('int')
  currentValue: number;
  @Column('int')
  secuencies: number;
  @OneToMany(() => VideoEntity, (video) => video.excercise)
  video: VideoEntity[];
  @ManyToMany(() => MachineEntity, (machine) => machine.focus, {
    eager: true,
  })
  machine: MachineEntity[];
  @ManyToMany(
    () => BodyMuscleEntity,
    (bodyMuscle) => bodyMuscle.bestExcercises,
    {
      eager: true,
    },
  )
  @JoinTable()
  focus: BodyMuscleEntity[];
}
