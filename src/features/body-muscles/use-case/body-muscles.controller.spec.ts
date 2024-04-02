import { Test, TestingModule } from '@nestjs/testing';
import { BodyMusclesController } from './body-muscles.controller';
import { BodyMusclesService } from './body-muscles.service';

describe('BodyMusclesController', () => {
  let controller: BodyMusclesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BodyMusclesController],
      providers: [BodyMusclesService],
    }).compile();

    controller = module.get<BodyMusclesController>(BodyMusclesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
