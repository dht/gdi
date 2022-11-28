import { isEmpty } from 'shared-base';
import { boolean } from 'yup';
export type Json = Record<string, any>;

export const areFieldsFull = (data: Json, fields: string[] = []) => {
    if (fields.length === 0) {
        return true;
    }

    return fields.reduce((output: boolean, field: string) => {
        let ok = !isEmpty(data[field]);

        if (field.includes('|')) {
            ok = field.split('|').reduce((output2: boolean, field2: string) => {
                return output2 || !isEmpty(data[field2]);
            }, false);
        }

        return output && ok;
    }, true);
};

type ShowGroupConditions = Record<string, string[]>;

export const showGroupIf =
    (conditions: ShowGroupConditions) => (groupId: string, data: Json) => {
        return areFieldsFull(data, conditions[groupId]);
    };
