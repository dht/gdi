import React from 'react';
import { prompt } from '../Prompt/Prompt.actions';
import { TextArea, Wrapper } from './BuiltWithGdi.style';

export type BuiltWithGdiProps = {
    data: Json;
};

export function BuiltWithGdi(props: BuiltWithGdiProps) {
    const { data } = props;

    async function showSiteData() {
        await prompt.custom({
            title: "Site's Schema",
            component: SiteData,
            componentProps: {
                data,
            },
        });
    }

    return (
        <Wrapper
            className='BuiltWithGdi-wrapper'
            data-testid='BuiltWithGdi-wrapper'
            onClick={showSiteData}
        >
            Built with gDI
        </Wrapper>
    );
}

type SiteDataProps = {
    data: Json;
};

function SiteData(props: SiteDataProps) {
    const { data } = props;

    return <TextArea defaultValue={JSON.stringify(data, null, 4)}></TextArea>;
}

export default BuiltWithGdi;
