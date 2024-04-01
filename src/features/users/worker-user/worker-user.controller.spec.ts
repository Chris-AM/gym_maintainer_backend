import { Test, TestingModule } from '@nestjs/testing';
import { WorkerUserController } from './worker-user.controller';
import { WorkerUserService } from './worker-user.service';

describe('WorkerUserController', () => {
  let controller: WorkerUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkerUserController],
      providers: [WorkerUserService],
    }).compile();

    controller = module.get<WorkerUserController>(WorkerUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
