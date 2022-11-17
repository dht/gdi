import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';
import * as sharp from 'sharp';
import type { OutputInfo } from 'sharp';

export const generateThumbnail = functions.storage
    .object()
    .onFinalize(async (object) => {
        const fileBucket = object.bucket; // The Storage bucket that contains the file.
        const filePath = object.name ?? ''; // File path in the bucket.
        const contentType = object.contentType ?? ''; // File content type.

        if (!filePath.startsWith('uploads/')) {
            return functions.logger.log(`"${filePath}" is not in "/uploads".`);
        }

        if (!contentType.startsWith('image/')) {
            return functions.logger.log('This is not an image.');
        }

        const ext = path.extname(filePath);
        const fileName = path.basename(filePath, ext);
        if (fileName.includes('_thumb')) {
            return functions.logger.log('Already a Thumbnail.');
        }

        const bucket = admin.storage().bucket(fileBucket);
        const tempFilePath = path.join(os.tmpdir(), fileName);
        const metadata = {
            contentType: 'image/webp',
        };

        await bucket.file(filePath).download({
            destination: tempFilePath,
        });
        functions.logger.log('Image downloaded locally to', tempFilePath);

        let tempFileName: string, destination: string;

        const params = {
            destinationPath: 'libraryImages',
            maxWidth: 1000,
            maxThumbWidth: 400,
        };

        if (fileName.includes('person')) {
            params.destinationPath = 'people';
            params.maxWidth = 300;
            params.maxThumbWidth = 150;
        }

        tempFileName = getTempFileName(fileName, params.maxWidth);
        destination = `${params.destinationPath}/${fileName}.webp`;
        await resizeImage(tempFilePath, params.maxWidth, tempFileName);
        await bucket.upload(tempFileName, {
            destination,
            metadata: metadata,
        });
        functions.logger.log('Resized 1000px created at', tempFileName);

        tempFileName = getTempFileName(fileName, params.maxThumbWidth);
        await resizeImage(tempFilePath, params.maxThumbWidth, tempFileName);
        destination = `${params.destinationPath}/${fileName}_thumb.webp`;
        await bucket.upload(tempFileName, {
            destination,
            metadata: metadata,
        });
        functions.logger.log('Thumbnail created at', tempFileName);

        return fs.unlinkSync(tempFilePath);
    });

const getTempFileName = (fileName: string, size: number) => {
    let newFileName = `${fileName}_${size}_thumb.png`;
    return path.join(os.tmpdir(), newFileName);
};

const resizeImage = (
    inputPath: string,
    toWidth: number,
    outputPath: string
): Promise<OutputInfo> => {
    return new Promise((resolve, reject) => {
        sharp(inputPath)
            .resize(toWidth)
            .webp()
            .toFile(outputPath, (err: any, info: any) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(info);
            });
    });
};
