export const delay = (duration: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(null);
        }, duration);
    });
};

export const second = () => delay(1000);
