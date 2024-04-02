import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseService } from './database.service';

export const getTypeOrmModuleOptions = (
  config: DatabaseService,
): TypeOrmModuleOptions =>
  ({
    type: config.getDatabaseType(),
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUsername(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    autoLoadEntities: true,
    synchronize: true,
    migrationsRun: true,
    // ssl: {
    //   rejectUnauthorized: false,
    // },
  }) as TypeOrmModuleOptions;
