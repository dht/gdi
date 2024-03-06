const fs = require('fs-extra');
const { isEmpty } = require('lodash');

const generateParameters = (parameters) => {
  if (!parameters) return null;

  const output = {
    type: 'object',
    properties: {},
    required: [],
  };

  Object.keys(parameters).forEach((key) => {
    const parameter = parameters[key];
    const { type, description, enum: options, isRequired } = parameter;

    output.properties[key] = {
      type,
      description,
    };

    if (options) {
      output.properties[key].enum = options;
    }

    if (isRequired) {
      output.required.push(key);
    }
  });

  return output;
};

const generateFunction = (capability) => {
  const { id, name, description, parameters } = capability;

  const output = {
    type: 'function',
    function: {
      name: id,
      description: `${name}: ${description}`,
    },
  };

  if (!isEmpty(parameters)) {
    output.parameters = generateParameters(parameters);
  }

  return output;
};

const run = async () => {
  const capabilities = await fs.readJson('./data.capabilities.json');
  const functions = Object.values(capabilities).map(generateFunction);

  const content = `export const capabilities = ${JSON.stringify(functions, null, 2)};`;

  await fs.writeFile('./data.capabilities.ts', content);
};

run();
