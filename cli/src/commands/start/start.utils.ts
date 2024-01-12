export const filterAllowedDomains = (allowedDomain: Json) => {
  return Object.keys(allowedDomain)
    .filter((key) => {
      return allowedDomain[key] === true;
    })
    .reduce((acc, curr) => {
      acc[curr] = true;
      return acc;
    }, {} as Json);
};

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

const requiredLength: any = {
  OPENAI_API_KEY: 51,
  ELEVENLABS_API_KEY: 32,
};

export const validateKeys = (keys: Json) => {
  const output = {
    isValid: true,
    message: '',
  };

  const keysEntries = Object.entries(keys);

  if (keysEntries.length === 0) {
    output.isValid = false;
    output.message = 'No keys found.';

    return output;
  }

  keysEntries.forEach(([key, value]) => {
    if (value.length !== requiredLength[key]) {
      output.isValid = false;
      output.message = `Invalid ${key}`;
    }
  });

  return output;
};
