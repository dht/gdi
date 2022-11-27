export const mobile = (css: any) => (props: any) => {
    return props.theme.device('mobile', css);
};
