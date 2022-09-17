import React from 'react';
import { Container, EmptyActions, EmptyText } from './FlexDesignerEmpty.style';
import { Button } from '@gdi/web-ui';

export type FlexDesignerEmptyProps = {
    onSeed: (withId: string) => void;
};

export function FlexDesignerEmpty(props: FlexDesignerEmptyProps) {
    return (
        <Container
            className='FlexDesignerEmpty-container'
            data-testid='FlexDesignerEmpty-container'
        >
            <EmptyText>Empty</EmptyText>

            <EmptyActions>
                <Button
                    title='seed with 1080p'
                    primary
                    onClick={() => props.onSeed('1080p')}
                />
                <Button
                    title='seed with blank'
                    onClick={() => props.onSeed('blank')}
                />
            </EmptyActions>
        </Container>
    );
}

export default FlexDesignerEmpty;
