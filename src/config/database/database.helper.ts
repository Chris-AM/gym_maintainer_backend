import { DatabaseService } from './database.service';

export const getMongooseODMConfig = (service: DatabaseService) => ({
  uri: `mongodb://${service.getDatabaseHost()}:${service.getDatabasePort()}/${service.getDatabaseName()}`,
});
