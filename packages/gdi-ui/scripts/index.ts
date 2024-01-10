import * as fs from 'fs';
import { set } from 'lodash';
import { upperFirst } from 'lodash';
import * as TJS from 'typescript-json-schema';

const outputPath = '../src/components/EditorSchema/schemas/';

const run = async () => {
  const index = { imports: [], exports: [] };

  const filesRaw = fs.readdirSync('./types');

  const files = filesRaw.map((file) => `./types/${file}`);

  const names = filesRaw.map((file) => {
    const parts = file.split('.');
    return parts[parts.length - 2];
  });

  const settings: TJS.PartialArgs = {
    required: true,
    topRef: true,
  };

  const compilerOptions: TJS.CompilerOptions = {
    strictNullChecks: true,
  };

  const basePath = '.';

  const program = TJS.getProgramFromFiles(files, compilerOptions, basePath);

  const generator = TJS.buildGenerator(program, settings);

  if (!generator) {
    return;
  }

  const noAdditionalProperties = (definitions: any) => {
    Object.values(definitions).forEach((definition: any) => {
      if (definition.type === 'object') {
        definition.additionalProperties = false;

        if (definition.properties) {
          noAdditionalProperties(definition.properties);
        }
      }
    });
  };

  const fixRecord = (definitions: any) => {
    Object.keys(definitions).forEach((key: any) => {
      const definition = definitions[key];

      if (definition.type === 'object' && !definition.properties && key !== 'Json') {
        const entity = 'I' + upperFirst(key.replace(/s$/, ''));
        definition.type = 'object';
        definition.patternProperties = {
          '.*': {
            $ref: `#/definitions/${entity}`,
          },
        };
      }

      if (definition.type === 'object' && definition.properties) {
        fixRecord(definition.properties);
      }
    });
  };

  for (let nodeName of names) {
    const schema = generator.getSchemaForSymbol(nodeName);

    schema.$ref = `#/definitions/${nodeName}`;
    schema.additionalProperties = false;

    noAdditionalProperties(schema.definitions);
    fixRecord(schema.definitions);

    if (schema.definitions?.Json) {
      set(schema, 'definitions.Json.additionalProperties', true);
    }

    const content = JSON.stringify(schema, null, 2);

    fs.writeFileSync(`${outputPath}schema.${nodeName}.json`, content);

    index.imports.push(`import ${nodeName} from './schema.${nodeName}.json';`);
    index.exports.push(nodeName);
  }

  fs.writeFileSync(
    `${outputPath}index.ts`,
    `${index.imports.join('\n')}\n\nexport const allSchemas: any =  {\n  ${index.exports.join(
      ',\n  '
    )}\n};\n`
  );
};

run();
