export { css } from 'styled-components';

export const mobile = (cssProperties: any) => (props: any) => {
    return props.theme.device('mobile', cssProperties);
};
