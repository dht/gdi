export { css } from 'styled-components';

export const mobile = (cssProperties: any) => (props: any) => {
    return props.theme.device('mobile', cssProperties);
};

export const device =
    (device: IResolution, cssProperties: any) => (props: any) => {
        return props.theme.device(device, cssProperties);
    };
