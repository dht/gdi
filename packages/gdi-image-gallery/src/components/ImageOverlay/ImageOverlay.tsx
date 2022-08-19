import { Icon, Tags } from '@gdi/web-ui';
import React from 'react';
import { IImage } from '../../types';
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
    item: IImage;
    viewMode: 'full' | 'minimal';
};

export function ImageOverlay(props: ImageOverlayProps) {
    const { item, isSelected, viewMode } = props;
    const { tags, title, isFavorite, isTemporary } = item;

    const isFull = viewMode === 'full';

    function renderIcons() {
        if (!isFavorite && !isTemporary) {
            return null;
        }

        return (
            <Icons>
                {isTemporary && (
                    <Temporary>
                        <Icon iconName='TestBeakerSolid' />
                    </Temporary>
                )}
                {isFavorite && (
                    <Asterisk>
                        <Icon iconName='AsteriskSolid' />
                    </Asterisk>
                )}
            </Icons>
        );
    }

    return (
        <Container
            className='ImageOverlay-container'
            data-testid='ImageOverlay-container'
            selected={isSelected}
        >
            {isFull && (
                <TagsWrapper>
                    <Tags tags={tags} color='cyan' />
                </TagsWrapper>
            )}
            {isFull && <Title>{title}</Title>}
            {renderIcons()}

            {isSelected && (
                <Selected>
                    <Icon iconName='StatusCircleCheckmark' />
                </Selected>
            )}
        </Container>
    );
}

export default ImageOverlay;
