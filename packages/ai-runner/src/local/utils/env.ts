import fs from 'fs';

export const parseEnv = (env: string) => {
  const envLines = env.split('\n');

  const envVars = envLines.reduce((acc, line) => {
    const [key, value] = line.split('=');

    if (key && typeof value !== 'undefined') {
      acc[key] = value;
    }

    return acc;
  }, {} as Json);

  return envVars;
};

export const readEnv = (envPath: string = process.cwd()) => {
  const envRaw = fs.readFileSync(envPath + '/.env', 'utf8');
  const apiKeys = parseEnv(envRaw);

  return apiKeys;
};
