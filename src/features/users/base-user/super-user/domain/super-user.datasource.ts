import { Observable } from 'rxjs';
import { CreateSuperUserDto } from './dto/create-super-user.dto';
import { UpdateSuperUserDto } from './dto/update-super-user.dto';
import { SuperUserEntity } from './super-user.entity';

export abstract class SuperUserDataSource {
  abstract createSuperUser(
    superUser: CreateSuperUserDto,
  ): Observable<SuperUserEntity>;
  abstract getSuperUserById(id: string): Observable<SuperUserEntity>;
  abstract getSuperUserByEmail(email: string): Observable<SuperUserEntity>;
  abstract updateSuperUser(
    superUser: UpdateSuperUserDto,
  ): Observable<SuperUserEntity>;
  abstract enableDisableSuperUser(
    id: string,
    status: boolean,
  ): Observable<SuperUserEntity>;
}
