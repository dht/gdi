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
import classnames from 'classnames';

export type ImageOverlayProps = {
    isSelected?: boolean;
    isFavorite?: boolean;
    isTemporary?: boolean;
    isDeleted?: boolean;
    item: IImage;
    viewMode: 'full' | 'minimal';
};

export function ImageOverlay(props: ImageOverlayProps) {
    const { item, isSelected, isFavorite, isTemporary, isDeleted, viewMode } =
        props;
    const { tags, title } = item;

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

    const className = classnames('ImageOverlay-container', `item-${item.id}`, {
        selected: isSelected,
        deleted: isDeleted,
    });

    return (
        <Container className={className} data-testid='ImageOverlay-container'>
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
