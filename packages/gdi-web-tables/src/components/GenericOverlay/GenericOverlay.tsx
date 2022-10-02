import React from 'react';
import { Icon, Tags } from '@gdi/web-base-ui';
import { IImage } from '../../types';
import {
    Container,
    Selected,
    TagsWrapper,
    Title,
} from './GenericOverlay.style';
import classnames from 'classnames';

export type GenericOverlayProps = {
    isSelected?: boolean;
    item: IImage;
    viewMode: 'full' | 'minimal';
};

export function GenericOverlay(props: GenericOverlayProps) {
    const { item, isSelected, viewMode } = props;
    const { tags, title } = item;

    const isFull = viewMode === 'full';

    const className = classnames(
        'GenericOverlay-container',
        `item-${item.id}`,
        {
            selected: isSelected,
        }
    );

    return (
        <Container className={className} data-testid='GenericOverlay-container'>
            {isFull && (
                <TagsWrapper>
                    <Tags tags={tags} color='cyan' />
                </TagsWrapper>
            )}
            {isFull && <Title>{title}</Title>}

            {isSelected && (
                <Selected>
                    <Icon iconName='StatusCircleCheckmark' />
                </Selected>
            )}
        </Container>
    );
}

export default GenericOverlay;
