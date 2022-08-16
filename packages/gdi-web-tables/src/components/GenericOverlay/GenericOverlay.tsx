import React from 'react';
import { Icon, Tags } from '@gdi/web-base-ui';
import { IImage, RenderOptions } from '../../types';
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
    options?: RenderOptions;
};

export function GenericOverlay(props: GenericOverlayProps) {
    const { item, isSelected, viewMode, options } = props;
    const { tags, title } = item;
    const { hideTitle = false } = options || {};

    const isFull = viewMode === 'full';

    const className = classnames(
        'GenericOverlay-container',
        `item-${item.id}`,
        {
            selected: isSelected,
        }
    );

    function renderTitle() {
        if (!isFull || hideTitle) {
            return;
        }

        return <Title>{title}</Title>;
    }

    return (
        <Container className={className} data-testid='GenericOverlay-container'>
            {isFull && (
                <TagsWrapper>
                    <Tags tags={tags} color='cyan' />
                </TagsWrapper>
            )}
            {renderTitle()}
            {isSelected && (
                <Selected>
                    <Icon iconName='StatusCircleCheckmark' />
                </Selected>
            )}
        </Container>
    );
}

export default GenericOverlay;
