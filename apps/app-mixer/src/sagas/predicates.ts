export const onInstanceSelectionChange = (action: any) => {
    return (
        action.type === 'PATCH_CURRENTIDS' &&
        typeof action.payload?.selectedInstanceId === 'string'
    );
};
