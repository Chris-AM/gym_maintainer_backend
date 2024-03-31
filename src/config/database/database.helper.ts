import { ConfigService } from "@nestjs/config";
import { LoggerService } from "../logger/logger.service";
import { DatabaseService } from "./database.service";

export const getMongooseODMConfig = (service: DatabaseService) => ({
  uri: `mongodb://${service.getDatabaseHost()}:${service.getDatabasePort()}/${service.getDatabaseName()}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
});