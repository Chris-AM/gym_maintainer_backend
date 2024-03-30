export interface DatabaseInterface {
  getDatabaseHost(): string;
  getDatabasePort(): number;
  getDatabaseUsername(): string;
  getDatabasePassword(): string;
  getDatabaseName(): string;
  getDatabaseSynchronize(): boolean;
  getDatabaseType(): string;
}
