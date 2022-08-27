import React, { useMemo } from 'react';
import { Container } from './ImageUpload.style';
import { formConfig } from './meta/ImageUpload.form';
import { allDetails } from './meta/ImageUpload.details';
import { Form } from '@gdi/web-forms';
import { guid8 } from 'shared-base';

export type ImageUploadProps = {
    allOptions: Json;
    callbacks: {
        onUpload: (file: File, imageId: string) => Promise<IUploadResult>;
        onSave: (change: Json, allData: Json) => Promise<boolean>;
    };
};

export function ImageUpload(props: ImageUploadProps) {
    const { allOptions, callbacks } = props;

    const formData = useMemo(
        () => ({
            imageId: guid8(),
        }),
        []
    );

    function onUpload(file: File) {
        return callbacks.onUpload(file, formData.imageId);
    }

    return (
        <Container
            className='ImageUpload-container'
            data-testid='ImageUpload-container'
        >
            <Form
                config={formConfig}
                data={formData}
                allOptions={allOptions}
                onSave={callbacks.onSave}
                allMethods={{
                    onUpload,
                }}
                allDetails={allDetails}
            />
        </Container>
    );
}

export default ImageUpload;
