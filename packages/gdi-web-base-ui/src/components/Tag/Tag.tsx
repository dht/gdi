import React from 'react';
import { Container, Delete, Title } from './Tag.style';
import classnames from 'classnames';

export type TagProps = {
    tag: string;
    color?: string;
    onClick?: () => void;
    onDelete?: () => void;
    size?: 'small' | 'medium' | 'large';
};

export function Tag(props: TagProps) {
    const { tag, color, size = 'medium' } = props;

    const tagType = tag.split('-').shift();

    const className = classnames(
        'Tag-container',
        `tag-${tag}`,
        tagType,
        color,
        size
    );

    function renderDelete() {
        if (!props.onDelete) {
            return null;
        }

        return (
            <Delete className='delete' onClick={props.onDelete}>
                ✕
            </Delete>
        );
    }

    return (
        <Container className={className} data-testid='Tag-container'>
            <Title className='title' onClick={props.onClick}>
                {tag}
            </Title>
            {renderDelete()}
        </Container>
    );
}

export default Tag;
