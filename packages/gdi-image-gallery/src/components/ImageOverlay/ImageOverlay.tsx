import { Icon, Tags } from '@gdi/web-ui';
import React from 'react';
import {
    Asterisk,
    Container,
    Icons,
    Selected,
    TagsWrapper,
    Temporary,
    Title,
} from './ImageOverlay.style';

export type ImageOverlayProps = {
    isSelected?: boolean;
};

export function ImageOverlay(props: ImageOverlayProps) {
    const { isSelected } = props;

    return (
        <Container
            className='ImageOverlay-container'
            data-testid='ImageOverlay-container'
            selected={isSelected}
        >
            <TagsWrapper>
                <Tags tags={['good']} color='cyan' />
            </TagsWrapper>
            <Title>Title</Title>
            <Icons>
                <Temporary>
                    <Icon iconName='TestBeakerSolid' />
                </Temporary>
                <Asterisk>
                    <Icon iconName='AsteriskSolid' />
                </Asterisk>
            </Icons>

            {isSelected && (
                <Selected>
                    <Icon iconName='StatusCircleCheckmark' />
                </Selected>
            )}
        </Container>
    );
}

export default ImageOverlay;
