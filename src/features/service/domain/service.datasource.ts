import { Observable } from 'rxjs';
import { ServiceEntity } from './service.entity';
import { CreateServiceDto } from './dto/create-service.dto';

export abstract class ServiceDataSource {
  abstract createService(service: CreateServiceDto): Observable<ServiceEntity>;
  abstract getServiceById(serviceId: string): Observable<ServiceEntity>;
  abstract getServices(): Observable<ServiceEntity[]>;
  abstract updateService(
    serviceId: string,
    service: ServiceEntity,
  ): Observable<ServiceEntity>;
  abstract deleteService(serviceId: string): Observable<ServiceEntity>;
}
