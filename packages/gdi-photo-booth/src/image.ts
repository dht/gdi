import type { OutputInfo } from 'sharp';
import sharp, { Sharp } from 'sharp';

export const resizeImage = (
    image: Sharp,
    toWidth: number,
    outputPath: string
): Promise<OutputInfo> => {
    return new Promise((resolve, reject) => {
        image
            .resize(toWidth)
            .webp()
            .toFile(outputPath, (err, info) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(info);
            });
    });
};

export const cropImage = (
    image: Sharp,
    box: BoundingBox,
    outputPath: string
): Promise<OutputInfo> => {
    return new Promise((resolve, reject) => {
        image
            .extract({
                left: Math.round(box.x),
                top: Math.round(box.y),
                width: Math.round(box.width),
                height: Math.round(box.height),
            })
            .webp()
            .toFile(outputPath, (err, info) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(info);
            });
    });
};

export const resizeImageFromPath = (
    inputPath: string,
    toWidth: number,
    outputPath: string
): Promise<OutputInfo> => {
    return resizeImage(sharp(inputPath), toWidth, outputPath);
};

export const cropImageFromPath = (
    inputPath: string,
    box: BoundingBox,
    outputPath: string
): Promise<OutputInfo> => {
    return cropImage(sharp(inputPath), box, outputPath);
};

export const image = (path: string) => sharp(path);

export type { Sharp } from 'sharp';

type BoundingBox = {
    x: number;
    y: number;
    width: number;
    height: number;
};
