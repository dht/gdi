import React from 'react';
import { Container } from './Articles.style';
import { Multi } from '@gdi/web-ui';

export type ArticlesProps = ICrudDefinitions & {
    data: Json[];
    allOptions?: Json;
};

export function Articles(props: ArticlesProps) {
    const { data, allOptions } = props;

    return (
        <Container
            className='Articles-container'
            data-testid='Articles-container'
        >
            <Multi
                id='Articles'
                itemType='article'
                data={data}
                allOptions={allOptions}
            />
        </Container>
    );
}

export default Articles;
