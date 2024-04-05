import { Observable } from 'rxjs';
import { AdminEntity } from './admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

export abstract class AdminDataSource {
  abstract createAdmin(admin: CreateAdminDto): Observable<AdminEntity>;
  abstract getAdminById(id: string): Observable<AdminEntity>;
  abstract getAdminByEmail(email: string): Observable<AdminEntity>;
  abstract updateAdmin(admin: UpdateAdminDto): Observable<AdminEntity>;
  abstract enableDisableAdmin(
    id: string,
    status: boolean,
  ): Observable<AdminEntity>;
}
