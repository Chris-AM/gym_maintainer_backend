export interface IDatabaseInterface {
  getDatabaseHost(): string;
  getDatabasePort(): string;
  getDatabaseUsername(): string;
  getDatabasePassword(): string;
  getDatabaseName(): string;
}
