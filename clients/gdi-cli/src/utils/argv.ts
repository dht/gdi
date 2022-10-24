export const parseArgv = (argv: any) => {
    const lastArg = [...argv].pop();
    try {
        return JSON.parse(lastArg ?? '');
    } catch (e) {
        return null;
    }
};
