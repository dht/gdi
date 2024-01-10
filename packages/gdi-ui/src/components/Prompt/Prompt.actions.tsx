import { addListener, invokeEvent } from 'shared-base';
import { IOption } from '../../types';

type PromptRequest = {
  title: string;
  label?: string;
  description?: string;
  defaultValue?: string;
  warning?: string;
  options?: IOption[];
  form?: PromptForm;
  code?: PromptCode;
  placeholder?: string;
  ctaButtonText?: string;
  hideCancel?: boolean;
  hideBackdrop?: boolean;
  darkMode?: boolean;
  point?: Json;
  component?: React.FC<any>;
  componentProps?: Json;
};

type PromptResponse = {
  didCancel: boolean;
  value?: string | Json;
};

type PromptForm = {
  config: any;
  data?: Json;
  allOptions?: Json;
  allDetails?: Json;
  allMethods?: Json;
};

type PromptCode = {
  python: string;
  javascript: string;
  curl: string;
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
  const { title, ctaButtonText, darkMode, hideBackdrop, description, warning } = promptRequest;

  return invokePromptAndListen({
    flavour: 'confirm',
    title,
    ctaButtonText,
    darkMode,
    hideBackdrop,
    params: {
      description,
      warning,
    },
  });
};

const input = (promptRequest: PromptRequest | string): Promise<PromptResponse> => {
  if (typeof promptRequest === 'string') {
    promptRequest = {
      title: promptRequest,
      placeholder: 'Enter value',
      ctaButtonText: 'Ok',
    };
  }

  const {
    title,
    ctaButtonText,
    description,
    defaultValue,
    label,
    placeholder,
    darkMode,
    hideBackdrop,
    warning,
  } = promptRequest;

  return invokePromptAndListen({
    flavour: 'input',
    title,
    ctaButtonText,
    darkMode,
    hideBackdrop,
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
    ctaButtonText,
    darkMode,
    hideBackdrop,
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
    ctaButtonText,
    darkMode,
    hideBackdrop,
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
  const { title, form, darkMode, hideBackdrop } = promptRequest;

  return invokePromptAndListen({
    flavour: 'form',
    title,
    darkMode,
    hideBackdrop,
    params: {
      ...form,
    },
  });
};

const pie = (promptRequest: PromptRequest): Promise<PromptResponse> => {
  const { options, point, darkMode, hideBackdrop } = promptRequest;

  return invokePromptAndListen({
    flavour: 'pie',
    hideBackdrop,
    darkMode,
    params: {
      options,
      point,
    },
  });
};

const custom = (promptRequest: PromptRequest): Promise<PromptResponse> => {
  const { title, component, darkMode, componentProps, hideBackdrop } = promptRequest;

  return invokePromptAndListen({
    flavour: 'custom',
    title,
    hideBackdrop,
    darkMode,
    params: {
      component,
      componentProps,
    },
  });
};

export type InputPrompt = (promptRequest: PromptRequest | string) => Promise<PromptResponse>;

export const prompt = {
  confirm,
  input,
  select,
  form,
  pie,
  custom,
};
