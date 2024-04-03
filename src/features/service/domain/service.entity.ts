import { CoachEntity } from 'src/features/users/base-user/worker-user/coach/domain/coach.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('service')
export class ServiceEntity {
  @PrimaryGeneratedColumn('uuid')
  serviceId: string;
  @Column('text')
  name: string;
  @Column('text')
  description: string;
  @Column('int')
  price: number;
  @Column('int')
  duration: number;
  @Column('boolean')
  isActive: boolean;
  @Column('int')
  daysAWeek: number;
  @ManyToOne(() => CoachEntity, (chief) => chief.servicesGiven)
  chief: CoachEntity;
}
