import { Observable } from 'rxjs';
import { CustomerEntity } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

export abstract class CustomerDataSource {
  abstract createCustomer(
    customer: CreateCustomerDto,
  ): Observable<CustomerEntity>;
  abstract getCustomerById(id: string): Observable<CustomerEntity>;
  abstract getCustomerByEmail(email: string): Observable<CustomerEntity>;
  abstract updateCustomer(
    customer: UpdateCustomerDto,
  ): Observable<CustomerEntity>;
  abstract enableDisableCustomer(
    id: string,
    status: boolean,
  ): Observable<CustomerEntity>;
}
