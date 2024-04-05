import { Test, TestingModule } from '@nestjs/testing';
import { BcryptService } from './bcrypt.service';

describe('BcryptService', () => {
  let service: BcryptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcryptService],
    }).compile();

    service = module.get<BcryptService>(BcryptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should hash a password', async () => {
    const password = 'password';
    const hashedPassword = await service.hashPassword(password);
    expect(hashedPassword).toBeDefined();
  });

  it('should compare a password and a hash', async () => {
    const password = 'password';
    const hashedPassword = await service.hashPassword(password);
    const doesPassMatch = await service.comparePassword(password, hashedPassword);
    expect(doesPassMatch).toBe(true);
  });
});
