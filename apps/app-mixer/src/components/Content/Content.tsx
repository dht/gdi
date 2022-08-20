import React from 'react';
import { Container } from './Content.style';
import { Modal, Form } from '@gdi/web-ui';
import { IWidgetInstance } from 'igrid';
import { formConfig } from './meta/Content.form';
import { formData } from './meta/Content.data';
import { allOptions } from './meta/Content.options';
import { allDetails } from './meta/Content.details';

export type ContentProps = {
    instance: IWidgetInstance;
    callbacks: {
        onSave: (data: Json) => Promise<any>;
    };
    panel?: boolean;
};

export function Content(props: ContentProps) {
    const { instance, callbacks, panel } = props;

    function onChange(change: Json) {
        console.log('change ->', change);
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
                allOptions={allOptions}
                onSave={callbacks.onSave}
                onChange={onChange}
                allDetails={allDetails}
            />
        </Container>
    );
}

export default Content;
