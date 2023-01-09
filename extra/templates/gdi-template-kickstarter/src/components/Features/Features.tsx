import React, { useMemo } from 'react';
import { Container, Wrapper } from './Features.style';
import { Masonry } from '@gdi/web-ui';

export type FeaturesProps = {
    dataset: Json[];
};

export function Features(props: FeaturesProps) {
    const { dataset } = props;

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
            onDoubleClick: () => {},
            onMouseEvent: () => {},
        }),
        []
    );

    return (
        <Wrapper className='Features-wrapper' data-testid='Features-wrapper'>
            <Container>
                <Masonry
                    items={dataset as any[]}
                    columns={2}
                    renderOverlay={() => <></>}
                    onClick={callbacks.onClick}
                    onDoubleClick={callbacks.onDoubleClick}
                    onMouseEvent={callbacks.onMouseEvent}
                />
            </Container>
        </Wrapper>
    );
}

export default Features;
