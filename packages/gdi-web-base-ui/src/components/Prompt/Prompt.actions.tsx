import React from 'react';
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
    component?: React.FC<any>;
    componentProps?: Json;
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

const choice = (promptRequest: PromptRequest): Promise<PromptResponse> => {
    const { title, submitButtonText, options, defaultValue } = promptRequest;

    return invokePromptAndListen({
        flavour: 'choice',
        title,
        submitButtonText,
        params: {
            options,
            defaultValue,
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

const custom = (promptRequest: PromptRequest): Promise<PromptResponse> => {
    const { title, component, componentProps } = promptRequest;

    return invokePromptAndListen({
        flavour: 'custom',
        title,
        params: {
            component,
            componentProps,
        },
    });
};

export type InputPrompt = (
    promptRequest: PromptRequest | string
) => Promise<PromptResponse>;

export const prompt = {
    confirm,
    input,
    select,
    choice,
    form,
    pie,
    custom,
};
