import { put, takeEvery } from 'saga-ts';
import { toast, ToastOptions } from 'react-toastify';

type ToastAction = {
    type: 'SHOW_TOAST';
    flavour?: 'error' | 'success' | 'warning' | 'info' | 'custom' | 'promise';
    message: string;
    promise?: Promise<any>;
};

export function* showToast(action: ToastAction): any {
    const {
        message,
        flavour = 'info',
        promise = new Promise(() => {}),
    } = action;

    const options: ToastOptions = {
        theme: 'dark',
    };

    switch (flavour) {
        case 'error':
            toast.error(message, options);
            break;
        case 'success':
            toast.success(message, options);
            break;
        case 'warning':
            toast.warn(message, options);
            break;
        case 'promise':
            toast.promise(
                promise!,
                {
                    pending: message,
                    success: message,
                    error: message,
                },
                options
            );
            break;
        case 'info':
            toast.info(message, options);
            break;

        case 'custom':
            toast(message, options);
            break;
    }
}

export function* root() {
    yield takeEvery('SHOW_TOAST', showToast);
}

export default root;
