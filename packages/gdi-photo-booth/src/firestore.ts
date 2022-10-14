import type { UploadResponse } from '@google-cloud/storage';

export const uploadAllScreenshots = async (
    outputDir: string,
    files: string[],
    bucket: any
) => {
    let promises: Promise<any>[] = [],
        promise;

    files.map((file) => {
        promise = bucket.upload(`${outputDir}/${file}`, {
            public: true,
            destination: `screenshots/${file}`,
        });
        promises.push(promise);
    });

    let responses: UploadResponse[];

    responses = await Promise.all(promises);

    const responseForFile = files.reduce(
        (output: Record<string, Json>, file, index) => {
            const metaData: Json = responses[index][1];
            output[file] = metaData;
            return output;
        },
        {}
    );

    return responseForFile;
};
