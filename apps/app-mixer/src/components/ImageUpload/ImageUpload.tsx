import React, { useMemo } from 'react';
import { Wrapper } from './ImageUpload.style';
import { formConfig as config } from './meta/ImageUpload.form';
import { allDetails } from './meta/ImageUpload.details';
import { Form } from '@gdi/web-ui';
import { guid8 } from 'shared-base';
import { useLanguage } from '@gdi/language';

export type ImageUploadProps = {
    allOptions: Json;
    callbacks: {
        onUpload: (file: File, imageId: string) => Promise<IUploadResult>;
        onSave: (change: Json, allData: Json) => Promise<boolean>;
    };
};

export function ImageUpload(props: ImageUploadProps) {
    const { allOptions, callbacks } = props;
    const { t } = useLanguage();

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
        <Wrapper
            className='ImageUpload-wrapper'
            data-testid='ImageUpload-wrapper'
        >
            <Form
                config={config}
                data={formData}
                allOptions={allOptions}
                onSave={callbacks.onSave}
                allMethods={{
                    onUpload,
                }}
                allDetails={allDetails}
            />
        </Wrapper>
    );
}

export default ImageUpload;
