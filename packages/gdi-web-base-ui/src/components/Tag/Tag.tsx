import React from 'react';
import { Container, Delete, Title } from './Tag.style';
import classnames from 'classnames';

export type TagProps = {
    tag: string;
    color?: string;
    onClick?: () => void;
    onDelete?: () => void;
};

export function Tag(props: TagProps) {
    const { tag, color } = props;

    const tagType = tag.split('-').shift();

    const className = classnames('Tag-container', `tag-${tag}`, tagType, color);

    function renderDelete() {
        if (!props.onDelete) {
            return null;
        }

        return <Delete onClick={props.onDelete}>✕</Delete>;
    }

    return (
        <Container className={className} data-testid='Tag-container'>
            <Title onClick={props.onClick}>{tag}</Title>
            {renderDelete()}
        </Container>
    );
}

export default Tag;
