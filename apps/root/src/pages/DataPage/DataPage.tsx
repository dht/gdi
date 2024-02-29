import React from 'react';
import { Wrapper } from './DataPage.style';

export type DataPageProps = {};

export function DataPage(_props: DataPageProps) {
    return (
        <Wrapper className="DataPage-wrapper" data-testid="DataPage-wrapper">
            DataPage
        </Wrapper>
    );
}

export default DataPage;
