import { Observable } from 'rxjs';
import { CoachEntity } from './coach.entity';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';

export abstract class CoachDataSource {
  abstract createCoach(coach: CreateCoachDto): Observable<CoachEntity>;
  abstract getCoachById(id: string): Observable<CoachEntity>;
  abstract getCoachByEmail(email: string): Observable<CoachEntity>;
  abstract updateCoach(coach: UpdateCoachDto): Observable<CoachEntity>;
  abstract enableDisableCoach(
    id: string,
    status: boolean,
  ): Observable<CoachEntity>;
}
