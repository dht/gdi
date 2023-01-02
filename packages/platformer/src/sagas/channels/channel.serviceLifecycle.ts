import { customEventChannel } from './channel.customEvent';

export function serviceRegisterSuccessChannel(serviceId: string) {
    return customEventChannel(`SERVICE_REGISTER_SUCCESS_${serviceId}`);
}

export function serviceRegisterErrorChannel(serviceId: string) {
    return customEventChannel(`SERVICE_REGISTER_ERROR_${serviceId}`);
}
