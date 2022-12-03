import React from 'react';
import { Wrapper } from './Inspector.style';
import { KeyValue, Tags } from '@gdi/web-ui';

export type InspectorProps = {
    data: Json;
};

export function Inspector(props: InspectorProps) {
    const { data } = props;

    function renderCustomField(fieldName: string, value: any) {
        switch (fieldName) {
            case 'tags':
                return <Tags tags={value} />;
        }

        return <></>;
    }

    return (
        <Wrapper className='Inspector-wrapper' data-testid='Inspector-wrapper'>
            <KeyValue
                data={data}
                customFields={['tags']}
                renderCustomField={renderCustomField}
            />
        </Wrapper>
    );
}

export default Inspector;
