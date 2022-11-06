import { addListener, invokeEvent } from 'shared-base';

type PromptRequest = {
    title: string;
    label?: string;
    description?: string;
    defaultValue?: string;
    warning?: string;
    options?: IOption[];
    form?: PromptForm;
    placeholder?: string;
    submitButtonText?: string;
    point?: Json;
};

type PromptResponse = {
    didCancel: boolean;
    value?: string | Json;
};

type PromptForm = {
    config: IFormConfig;
    data?: Json;
    allOptions?: Json;
    allDetails?: Json;
    allMethods?: Json;
};

type ICallback = () => void;

let listeners: ICallback[] = [],
    listener: ICallback;

const invokePromptAndListen = (data: Json): Promise<PromptResponse> => {
    const cleanUp = () => {
        listeners.forEach((listener) => {
            if (typeof listener === 'function') {
                listener();
            }
        });
    };

    cleanUp();

    return new Promise((resolve) => {
        invokeEvent('SHOW_PROMPT', data);

        listener = addListener('PROMPT_RESPONSE', (ev: any) => {
            const { value } = ev;
            cleanUp();
            resolve({ didCancel: false, value });
        });

        listeners.push(listener);

        listener = addListener('PROMPT_CANCEL', () => {
            cleanUp();
            resolve({ didCancel: true });
        });

        listeners.push(listener);
    });
};

const confirm = (promptRequest: PromptRequest): Promise<PromptResponse> => {
    const { title, submitButtonText, description, warning } = promptRequest;

    return invokePromptAndListen({
        flavour: 'confirm',
        title,
        submitButtonText,
        params: {
            description,
            warning,
        },
    });
};

const input = (
    promptRequest: PromptRequest | string
): Promise<PromptResponse> => {
    if (typeof promptRequest === 'string') {
        promptRequest = {
            title: promptRequest,
            placeholder: 'Enter value',
            submitButtonText: 'Ok',
        };
    }

    const {
        title,
        submitButtonText,
        description,
        defaultValue,
        label,
        placeholder,
        warning,
    } = promptRequest;

    return invokePromptAndListen({
        flavour: 'input',
        title,
        submitButtonText,
        params: {
            title,
            label,
            description,
            defaultValue,
            placeholder,
            warning,
        },
    });
};

const select = (promptRequest: PromptRequest): Promise<PromptResponse> => {
    const {
        title,
        submitButtonText,
        description,
        defaultValue,
        options,
        label,
        placeholder,
        warning,
    } = promptRequest;

    console.log('options ->', options);

    return invokePromptAndListen({
        flavour: 'select',
        title,
        submitButtonText,
        params: {
            title,
            description,
            defaultValue,
            label,
            placeholder,
            options,
            warning,
        },
    });
};

const form = (promptRequest: PromptRequest): Promise<PromptResponse> => {
    const { title, form } = promptRequest;

    return invokePromptAndListen({
        flavour: 'form',
        title,
        params: {
            ...form,
        },
    });
};

const pie = (promptRequest: PromptRequest): Promise<PromptResponse> => {
    const { options, point } = promptRequest;

    return invokePromptAndListen({
        flavour: 'pie',
        params: {
            options,
            point,
        },
    });
};

export const prompt = {
    confirm,
    input,
    select,
    form,
    pie,
};
