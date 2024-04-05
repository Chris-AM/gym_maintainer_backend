import { Observable } from 'rxjs';
import { CreateBodyMuscleDto } from './dto/create-body-muscle.dto';
import { BodyMuscleEntity } from './body-muscle.entity';

export abstract class BodyMuscleDataSource {
  abstract createMuscle(
    muscle: CreateBodyMuscleDto,
  ): Observable<BodyMuscleEntity>;
  abstract getMuscles(): Observable<BodyMuscleEntity[]>;
  abstract getMuscleById(muscleId: string): Observable<BodyMuscleEntity>;
  abstract updateMuscle(
    muscleId: string,
    muscle: CreateBodyMuscleDto,
  ): Observable<BodyMuscleEntity>;
  abstract deleteMuscle(muscleId: string): Observable<BodyMuscleEntity>;
}
