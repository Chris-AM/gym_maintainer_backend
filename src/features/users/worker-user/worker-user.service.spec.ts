import { Test, TestingModule } from '@nestjs/testing';
import { WorkerUserService } from './worker-user.service';

describe('WorkerUserService', () => {
  let service: WorkerUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkerUserService],
    }).compile();

    service = module.get<WorkerUserService>(WorkerUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
