// see: https://stackoverflow.com/questions/67579700/typescript-how-to-import-autocomplete-from-enquirer
// @ts-ignore-next-line
import { AutoComplete, BooleanPrompt, prompt } from 'enquirer';
import * as yup from 'yup';

const DEFAULT_FIELD_NAME = 'field';

type Choice = {
    id: string;
    label: string;
};

export type Question = {
    name: string;
    message?: string;
    type?:
        | 'AutoComplete'
        | 'BasicAuth'
        | 'Confirm'
        | 'Editable'
        | 'Form'
        | 'Input'
        | 'Invisible'
        | 'List'
        | 'MultiSelect'
        | 'Numeral'
        | 'Password'
        | 'Scale'
        | 'Select'
        | 'Snippet'
        | 'Sort'
        | 'Survey'
        | 'Text'
        | 'Toggle'
        | 'Quiz';
    limit?: number;
    selectedId?: string;
    choices?: Choice[];
    optional?: boolean;
    showIds?: boolean;
    initial?: string | InitialMethod;
    validation?: 'email' | 'url';
};

export type InitialMethod = (instance: any) => string;

export type Questions = Question[];

export const autoComplete = async (message: string, choices: string[]) => {
    const prompt = new AutoComplete({
        name: DEFAULT_FIELD_NAME,
        message,
        limit: 10,
        choices,
    });

    try {
        return prompt.run();
    } catch (err) {
        return null;
    }
};

export const boolean = async (message: string) => {
    const prompt = new BooleanPrompt({
        message,
    });

    try {
        return prompt.run();
    } catch (err) {
        return null;
    }
};

const parseChoices = (
    choices: Choice[] = [],
    selectedId?: string,
    showIds?: boolean
) => {
    return choices.map((choice) => {
        let message = choice.label;

        if (showIds) {
            message = `${choice.label} | ${choice.id}`;
        }

        return {
            value: choice.id,
            name: choice.label,
            message,
            hint: selectedId === choice.id ? '<==========' : '',
        };
    });
};

const findInitial = (question: Question) => {
    const { choices = [] } = question;
    return choices.findIndex((choice) => choice.id === question.selectedId);
};

const validators = {
    email: yup.string().email().required(),
    url: yup.string().url().required(),
};

const validationErrors = {
    email: 'A valid email is required',
    url: 'A valid URL is required',
};

const validate = (question: Question) => async (value: any) => {
    const { validation } = question;

    if (validation && validators[validation]) {
        const isValid = await validators[validation].isValid(value);

        if (!isValid) {
            return validationErrors[validation];
        }
    }

    return true;
};

export const askQuestions = async (questions: Questions) => {
    const parsedQuestions = questions.map((question) => {
        const { name, message, type = 'Input', optional, initial } = question;

        const output: any = {
            name,
            type,
            message: message || name + ':',
            required: !optional,
            validate: validate(question),
        };

        switch (question.type) {
            case 'AutoComplete':
                const { choices, selectedId, limit, showIds } = question;
                output.limit = limit;
                output.choices = parseChoices(choices, selectedId, showIds);
                output.initial = findInitial(question);
                break;
            case 'Input':
            default:
                output.initial = initial;
                break;
        }

        return output;
    });

    return prompt(parsedQuestions);
};
