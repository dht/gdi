export const onInstanceSelectionChange = (action: any) => {
    return (
        action.type === 'PATCH_CURRENTIDS' &&
        typeof action.payload?.selectedInstanceId === 'string'
    );
};

export const onMobileModeChange = (action: any) => {
    return (
        action.type === 'PATCH_APPSTATEMIXER' &&
        typeof action.payload?.mobileMode === 'boolean'
    );
};
