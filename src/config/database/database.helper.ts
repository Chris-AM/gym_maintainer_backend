import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import { DatabaseService } from './database.service';

const YAML_CONFIG_FILENAME = '../../.github/workflows/development.yml';

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
    entities: [
      'dist/features/**/domain/*.entity.{ts,js}',
      'dist/features/users/base-user/**/domain/*.entity.{ts,js}',
    ],
    autoLoadEntities: true,
    synchronize: true,
    migrationsRun: true,
    // ssl: {
    //   rejectUnauthorized: false,
    // },
  }) as TypeOrmModuleOptions;


export const configuration = () => {
  const config = yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as DBConfig;
  return config;
};

export type DBConfig = {
  database: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
};
