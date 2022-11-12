import { takeEvery } from 'saga-ts';
import { toast } from '@gdi/web-base-ui';

type ToastAction = {
    type: 'SHOW_TOAST';
    flavour?: 'error' | 'success' | 'warning' | 'info' | 'custom' | 'promise';
    message: string | string[];
    promise?: Promise<any>;
};

export function* showToast(action: ToastAction): any {
    const {
        message,
        flavour = 'success',
        promise = new Promise(() => {}),
    } = action;

    toast.show(message, flavour, promise);
}

export function* root() {
    yield takeEvery('SHOW_TOAST', showToast);
}

export default root;
