export let isLocalInstance: boolean = false;
export let localInstanceUrl: string = '';

export const setIsLocalInstance = (value: boolean) => {
  isLocalInstance = value;
};

export const setLocalInstanceUrl = (value: string) => {
  localInstanceUrl = value;
};
