import { BodyMuscleEntity } from 'src/features/body-muscles/domain/body-muscle.entity';
import { MachineEntity } from 'src/features/machine/domain/machine.entity';
import { PlanEntity } from 'src/features/plan/domain/plan.entity';
import { VideoEntity } from 'src/features/video/domain/video.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
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
  @ManyToOne(() => PlanEntity, (plan) => plan.excercises)
  plan: PlanEntity;
  @ManyToMany(() => MachineEntity, (machine) => machine.focus, {
    eager: true,
  })
  @JoinTable()
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
