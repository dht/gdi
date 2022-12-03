import React from 'react';
import { Wrapper } from './PreviewPage.style';

export type PreviewPageProps = {};

export function PreviewPage(_props: PreviewPageProps) {
    return (
        <Wrapper
            className='PreviewPage-wrapper'
            data-testid='PreviewPage-wrapper'
        >
            PreviewPage
        </Wrapper>
    );
}

export default PreviewPage;
