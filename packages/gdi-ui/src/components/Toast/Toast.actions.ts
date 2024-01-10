import { ToastFlavour } from '../../types';
import { toast as toastify, ToastOptions } from 'react-toastify';

export function showToast(
  message: string | string[],
  flavour?: ToastFlavour,
  promise?: Promise<any>
): any {
  const options: ToastOptions = {
    theme: 'light',
  };

  switch (flavour) {
    case 'error':
      toastify.error(message, options);
      break;

    case 'warning':
      toastify.warn(message, options);
      break;
    case 'promise':
      if (!promise) {
        return;
      }
      toastify.promise(
        promise,
        {
          pending: message[0],
          success: message[1],
          error: message[2],
        },
        options
      );
      break;
    case 'info':
      toastify.info(message, options);
      break;

    case 'custom':
      toastify(message, options);
      break;
    case 'success':
    default:
      toastify.success(message, options);
      break;
  }
}

export const toast = {
  show: showToast,
};
