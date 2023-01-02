import { IEndpointSchema } from '../types';
import { endpointSchemaToYup } from './yup';

describe.skip('yup', () => {
    let input: Json, schema: IEndpointSchema, output: Json, yup: any;

    it('string: valid', () => {
        input = {
            projectKey: 'test',
        };

        schema = {
            body: {
                projectKey: 'string',
            },
        };

        yup = endpointSchemaToYup(schema);
        output = yup.isValidSync(input);

        expect(output).toBe(true);
    });

    it('string: optional', () => {
        input = {};

        schema = {
            body: {
                projectKey: 'string?',
            },
        };

        yup = endpointSchemaToYup(schema);
        output = yup.isValidSync(input);

        expect(output).toBe(true);
    });

    it('string: missing', () => {
        input = {};

        schema = {
            body: {
                projectKey: 'string',
            },
        };

        yup = endpointSchemaToYup(schema);

        try {
            output = yup.validateSync(input);
        } catch (err) {
            expect(err.message).toBe('projectKey is a required field');
        }
    });

    it('string: missing a few', () => {
        input = {};

        schema = {
            body: {
                projectKey: 'string',
                newLine: 'string',
            },
        };

        yup = endpointSchemaToYup(schema);

        try {
            output = yup.validateSync(input, {
                abortEarly: false,
            });
        } catch (err) {
            expect(err.errors).toEqual([
                'projectKey is a required field',
                'newLine is a required field',
            ]);
        }
    });

    it('string: invalid type', () => {
        input = {
            projectKey: false,
        };

        schema = {
            body: {
                projectKey: 'string',
            },
        };

        yup = endpointSchemaToYup(schema);

        try {
            output = yup.validateSync(input, {
                strict: true,
            });
        } catch (err) {
            expect(err.message).toBe(
                'projectKey must be a `string` type, but the final value was: `false`.'
            );
        }
    });

    it('number: valid', () => {
        input = {
            count: 10,
        };

        schema = {
            body: {
                count: 'number',
            },
        };

        yup = endpointSchemaToYup(schema);
        output = yup.isValidSync(input);

        expect(output).toBe(true);
    });

    it('number: optional', () => {
        input = {};

        schema = {
            body: {
                count: 'number?',
            },
        };

        yup = endpointSchemaToYup(schema);
        output = yup.isValidSync(input);

        expect(output).toBe(true);
    });

    it('number: missing', () => {
        input = {};

        schema = {
            body: {
                count: 'number',
            },
        };

        yup = endpointSchemaToYup(schema);

        try {
            output = yup.validateSync(input);
        } catch (err) {
            expect(err.message).toBe('count is a required field');
        }
    });

    it('number: invalid type', () => {
        input = {
            count: true,
        };

        schema = {
            body: {
                count: 'number',
            },
        };

        yup = endpointSchemaToYup(schema);

        try {
            output = yup.validateSync(input, {
                strict: true,
            });
        } catch (err) {
            expect(err.message).toBe(
                'count must be a `number` type, but the final value was: `true`.'
            );
        }
    });

    it('boolean: valid', () => {
        input = {
            withToken: true,
        };

        schema = {
            body: {
                withToken: 'boolean',
            },
        };

        yup = endpointSchemaToYup(schema);
        output = yup.isValidSync(input);

        expect(output).toBe(true);
    });

    it('string: optional', () => {
        input = {};

        schema = {
            body: {
                withToken: 'boolean?',
            },
        };

        yup = endpointSchemaToYup(schema);
        output = yup.isValidSync(input);

        expect(output).toBe(true);
    });

    it('boolean: missing', () => {
        input = {};

        schema = {
            body: {
                withToken: 'boolean',
            },
        };

        yup = endpointSchemaToYup(schema);

        try {
            output = yup.validateSync(input);
        } catch (err) {
            expect(err.message).toBe('withToken is a required field');
        }
    });

    it('boolean: invalid type', () => {
        input = {
            withToken: 1,
        };

        schema = {
            body: {
                withToken: 'boolean',
            },
        };

        yup = endpointSchemaToYup(schema);

        try {
            output = yup.validateSync(input, {
                strict: true,
            });
        } catch (err) {
            expect(err.message).toBe(
                'withToken must be a `boolean` type, but the final value was: `1`.'
            );
        }
    });

    it('date: valid', () => {
        input = {
            dateModified: '2025-10-10 10:00:00',
        };

        schema = {
            body: {
                dateModified: 'date',
            },
        };

        yup = endpointSchemaToYup(schema);
        output = yup.isValidSync(input);

        expect(output).toBe(true);
    });

    it('date: optional', () => {
        input = {};

        schema = {
            body: {
                dateModified: 'date?',
            },
        };

        yup = endpointSchemaToYup(schema);
        output = yup.isValidSync(input);

        expect(output).toBe(true);
    });

    it('date: missing', () => {
        input = {};

        schema = {
            body: {
                dateModified: 'date',
            },
        };

        yup = endpointSchemaToYup(schema);

        try {
            output = yup.validateSync(input);
        } catch (err) {
            expect(err.message).toBe('dateModified is a required field');
        }
    });

    it('date: invalid type', () => {
        input = {
            dateModified: 1,
        };

        schema = {
            body: {
                dateModified: 'date',
            },
        };

        yup = endpointSchemaToYup(schema);

        try {
            output = yup.validateSync(input, {
                strict: true,
            });
        } catch (err) {
            expect(err.message).toBe(
                'dateModified must be a `date` type, but the final value was: `1`.'
            );
        }
    });

    it('string: missing + invalid', () => {
        input = {
            newLine: 'good',
        };

        schema = {
            body: {
                projectKey: 'string',
                newLine: 'number',
            },
        };

        yup = endpointSchemaToYup(schema);

        try {
            output = yup.validateSync(input, {
                strict: true,
                abortEarly: false,
            });
        } catch (err) {
            expect(err.errors).toEqual([
                'projectKey is a required field',
                'newLine must be a `number` type, but the final value was: `"good"`.',
            ]);
        }
    });
});
