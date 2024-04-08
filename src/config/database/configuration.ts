import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = '../../../.github/workflows/deployments.yml';

export default () => {
  const config = yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as any ;
  const env = config.env as DBConfig;
  console.log('env config ==> ', env.database)
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
