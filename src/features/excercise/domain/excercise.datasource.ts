import { Observable } from 'rxjs';
import { ExcerciseEntity } from './excercise.entity';
import { CreateExcerciseDto } from './dto/create-excercise.dto';
import { UpdateExcerciseDto } from './dto/update-excercise.dto';
export abstract class ExcerciseDataSource {
  abstract createExcercise(
    excercise: CreateExcerciseDto,
  ): Observable<ExcerciseEntity>;
  abstract getExcerciseById(id: string): Observable<ExcerciseEntity>;
  abstract getExcerciseByName(name: string): Observable<ExcerciseEntity>;
  abstract updateExcercise(
    excercise: UpdateExcerciseDto,
  ): Observable<ExcerciseEntity>;
  abstract enableDisableExcercise(
    id: string,
    status: boolean,
  ): Observable<ExcerciseEntity>;
}
