export interface IJwtServicePayload {
  id: string;
}

export interface IJwtService {
  checkToken(token: string): Promise<any>;
  createToken(payload: IJwtService, secret: string, expiresIn: string): string;
}
