import React from 'react';
import { Wrapper, Delete, Title } from './Tag.style';
import classnames from 'classnames';

export type TagProps = {
    tag: string;
    color?: string;
    onClick?: () => void;
    onDelete?: (tag: string) => void;
    size?: 'small' | 'medium' | 'large';
};

export function Tag(props: TagProps) {
    const { tag, color, size = 'medium' } = props;

    const tagType = tag.split('-').shift();

    const className = classnames(
        'Tag-wrapper',
        `tag-${tag}`,
        tagType,
        color,
        size
    );

    function onDelete() {
        if (!props.onDelete) {
            return null;
        }

        props.onDelete(tag);
    }

    function renderDelete() {
        if (!props.onDelete) {
            return null;
        }

        return (
            <Delete className='delete' onClick={onDelete}>
                ✕
            </Delete>
        );
    }

    return (
        <Wrapper className={className} data-testid='Tag-wrapper'>
            <Title className='title' onClick={props.onClick}>
                {tag}
            </Title>
            {renderDelete()}
        </Wrapper>
    );
}

export default Tag;
