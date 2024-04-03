import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BodyMuscleEntity } from './body-muscle.entity';

@Entity({ name: 'body-muscle-icon' })
export class BodyMuscleIconEntity {
  @PrimaryGeneratedColumn('uuid')
  iconId: string;
  @Column('text')
  url: string;
  @OneToOne(() => BodyMuscleEntity, (bodyMuscle) => bodyMuscle.icon)
  bodyMuscle: BodyMuscleEntity;
}
