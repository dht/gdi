export const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = () => {
            resolve(image);
        };

        image.onerror = (e) => {
            reject(e);
        };

        image.src = src;
    });
};

export const loadImages = (sources: string[]): Promise<HTMLImageElement[]> => {
    return Promise.all(sources.map((src) => loadImage(src)));
};
