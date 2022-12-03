import React from 'react';
import { Wrapper } from './Content.style';
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
        <Wrapper className='Content-wrapper' data-testid='Content-wrapper'>
            <Form
                config={formConfig}
                data={formData}
                allOptions={formOptions}
                onSave={callbacks.onSave}
                onChange={onChange}
                allDetails={allDetails}
            />
        </Wrapper>
    );
}

export default Content;
