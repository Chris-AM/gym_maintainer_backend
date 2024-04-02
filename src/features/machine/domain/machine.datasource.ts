import { Observable } from 'rxjs';
import { MachineEntity } from './machine.entity';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';

export abstract class MachineDataSource {
  abstract createMachine(
    createMachineDto: CreateMachineDto,
  ): Observable<MachineEntity>;
  abstract getMachineById(machineId: string): Observable<MachineEntity>;
  abstract getAllMachines(): Observable<MachineEntity[]>;
  abstract updateMachine(
    updateMachineDto: UpdateMachineDto,
  ): Observable<MachineEntity>;
  abstract deleteMachine(machineId: string): Observable<MachineEntity>;
}
