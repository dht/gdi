import React from 'react';
import { Wrapper } from './BusinessInfo.style';
import { Form } from '@gdi/web-ui';
import formConfig from './json/BusinessInfo.form.json';

export type BusinessInfoProps = {
    businessInfo: Json;
    allOptions: Json;
    allDetails: any;
    callbacks: {
        onSave: (change: Json, allData: Json) => Promise<boolean>;
    };
};

export function BusinessInfo(props: BusinessInfoProps) {
    const { businessInfo, allOptions, allDetails, callbacks } = props;

    return (
        <Wrapper
            className='BusinessInfo-wrapper'
            data-testid='BusinessInfo-wrapper'
        >
            <Form
                config={formConfig as any}
                data={businessInfo}
                allOptions={allOptions}
                onSave={callbacks.onSave}
                allDetails={allDetails}
            />
        </Wrapper>
    );
}

export default BusinessInfo;
