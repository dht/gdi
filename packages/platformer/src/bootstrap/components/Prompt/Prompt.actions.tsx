import { addListener, invokeEvent } from '../../utils/events';

type PromptRequest = {
    title: string;
    label?: string;
    description?: string;
    options?: IOption[];
    placeholder?: string;
    submitButtonText?: string;
};

type PromptResponse = {
    didCancel: boolean;
    value?: string;
};

type ICallback = () => void;

const invokePromptAndListen = (data: Json): Promise<PromptResponse> => {
    return new Promise((resolve) => {
        let listeners: ICallback[] = [],
            listener: ICallback;

        invokeEvent(
            'SHOW_PROMPT',
            { id: 'prompt_show', title: 'Prompt Show' },
            data
        );

        const cleanUp = () => {
            listeners.forEach((listener) => {
                if (typeof listener === 'function') {
                    listener();
                }
            });
        };

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

const confirm = async (
    promptRequest: PromptRequest
): Promise<PromptResponse> => {
    const { title, submitButtonText, description } = promptRequest;

    return invokePromptAndListen({
        flavour: 'confirm',
        title,
        submitButtonText,
        params: {
            description,
        },
    });
};

const input = async (promptRequest: PromptRequest): Promise<PromptResponse> => {
    const { title, submitButtonText, description, label, placeholder } =
        promptRequest;

    return invokePromptAndListen({
        flavour: 'input',
        title,
        submitButtonText,
        params: {
            title,
            label,
            description,
            placeholder,
        },
    });
};

type IOption = {
    key: string;
    text: string;
    isHeader?: boolean;
    isDisabled?: boolean;
};

const select = async (
    promptRequest: PromptRequest
): Promise<PromptResponse> => {
    const {
        title,
        submitButtonText,
        description,
        options,
        label,
        placeholder,
    } = promptRequest;

    return invokePromptAndListen({
        flavour: 'select',
        title,
        submitButtonText,
        params: {
            title,
            description,
            label,
            placeholder,
            options,
        },
    });
};

export const prompt = {
    confirm,
    input,
    select,
};
