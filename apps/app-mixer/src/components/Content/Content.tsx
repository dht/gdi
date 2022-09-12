import React from 'react';
import { Container } from './Content.style';
import { Form } from '@gdi/web-ui';
import { allDetails } from './meta/Content.details';

export type ContentProps = {
    formConfig: IFormConfig;
    formData: Json;
    formOptions: Json;
    callbacks: {
        onSave: (change: Json, allData: Json) => Promise<boolean>;
    };
};

export function Content(props: ContentProps) {
    const { callbacks, formConfig, formData, formOptions } = props;

    function onChange(_change: Json) {
        return Promise.resolve(true);
    }

    return (
        <Container
            className='Content-container'
            data-testid='Content-container'
        >
            <Form
                config={formConfig}
                data={formData}
                allOptions={formOptions}
                onSave={callbacks.onSave}
                onChange={onChange}
                allDetails={allDetails}
            />
        </Container>
    );
}

export default Content;
