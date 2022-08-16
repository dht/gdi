import React from 'react';
import { Container } from './Inspector.style';
import { data } from './meta/Inspector.data';
import { KeyValue, Tags } from '@gdi/web-ui';

export type InspectorProps = {};

export function Inspector(_props: InspectorProps) {
    function renderCustomField(fieldName: string, value: any) {
        switch (fieldName) {
            case 'tags':
                return <Tags tags={value} />;
        }

        return <></>;
    }

    return (
        <Container
            className='Inspector-container'
            data-testid='Inspector-container'
        >
            <KeyValue
                data={data}
                customFields={['tags']}
                renderCustomField={renderCustomField}
            />
        </Container>
    );
}

export default Inspector;
