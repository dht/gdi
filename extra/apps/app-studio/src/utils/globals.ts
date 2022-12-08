import { BabylonApi } from 'isokit';

const values: any = {
    babylon: {} as BabylonApi,
} as {
    babylon: BabylonApi;
};

export const globals = {
    set babylon(value: BabylonApi) {
        values.babylon = value;
    },
    get babylon() {
        return values.babylon;
    },
};
