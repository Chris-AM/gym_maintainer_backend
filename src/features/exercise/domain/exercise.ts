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

export type ExerciseDocument = ExerciseEntity & Document;

@Entity('exercise')
export class ExerciseEntity {
  @PrimaryGeneratedColumn('uuid')
  exerciseId: string;
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
  sequencies: number;
  @OneToMany(() => VideoEntity, (video) => video.exercise)
  video: VideoEntity[];
  @ManyToOne(() => PlanEntity, (plan) => plan.exercises)
  plan: PlanEntity;
  @ManyToMany(() => MachineEntity, (machine) => machine.focus, {
    eager: true,
  })
  @JoinTable()
  machine: MachineEntity[];
  @ManyToMany(
    () => BodyMuscleEntity,
    (bodyMuscle) => bodyMuscle.bestExercises,
    {
      eager: true,
    },
  )
  @JoinTable()
  focus: BodyMuscleEntity[];
}
