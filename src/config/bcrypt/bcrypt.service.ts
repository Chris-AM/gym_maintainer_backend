import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IBcryptService } from './bcrypt.interface';

@Injectable()
export class BcryptService implements IBcryptService {
  private readonly numberOfRounds: number = 10;
  async hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, this.numberOfRounds);
    return hashedPassword;
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    const doesPassMatch = await bcrypt.compare(password, hash);
    return doesPassMatch;
  }
}
