import { Observable } from 'rxjs';
import { ExerciseEntity } from './exercise';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
export abstract class ExerciseDataSource {
  abstract createExercise(
    exercise: CreateExerciseDto,
  ): Observable<ExerciseEntity>;
  abstract getExerciseById(id: string): Observable<ExerciseEntity>;
  abstract getExerciseByName(name: string): Observable<ExerciseEntity>;
  abstract updateExercise(
    exercise: UpdateExerciseDto,
  ): Observable<ExerciseEntity>;
  abstract enableDisableExercise(
    id: string,
    status: boolean,
  ): Observable<ExerciseEntity>;
}
