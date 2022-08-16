import React from 'react';
import { Container } from './Tag.style';
import classnames from 'classnames';

export type TagProps = {
    tag: string;
};

export function Tag(props: TagProps) {
    const { tag } = props;

    const tagType = tag.split('-').shift();

    const className = classnames('Tag-container', tagType);

    return (
        <Container className={className} data-testid='Tag-container'>
            {tag}
        </Container>
    );
}

export default Tag;
