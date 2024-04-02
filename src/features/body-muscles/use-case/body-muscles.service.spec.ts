import { Test, TestingModule } from '@nestjs/testing';
import { BodyMusclesService } from './body-muscles.service';

describe('BodyMusclesService', () => {
  let service: BodyMusclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BodyMusclesService],
    }).compile();

    service = module.get<BodyMusclesService>(BodyMusclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
