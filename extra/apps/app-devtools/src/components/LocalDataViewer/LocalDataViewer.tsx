import React from 'react';
import { Wrapper } from './LocalDataViewer.style';
import { JsonViewer } from '@gdi/web-ui';

export type LocalDataViewerProps = {
    json: Json;
};

export function LocalDataViewer(props: LocalDataViewerProps) {
    const { json } = props;

    return (
        <Wrapper
            className='LocalDataViewer-wrapper'
            data-testid='LocalDataViewer-wrapper'
        >
            <JsonViewer json={json} />
        </Wrapper>
    );
}

export default LocalDataViewer;
