import React from 'react';
import Tag from '../Tag/Tag';
import { Container } from './Tags.style';

export type TagsProps = {
    tags?: string[];
};

export function Tags(props: TagsProps) {
    const { tags = [] } = props;

    function renderTag(tag: string) {
        return <Tag key={tag} tag={tag} />;
    }

    function renderTags() {
        return tags.map((tag: string) => renderTag(tag));
    }

    return (
        <Container className='Tags-container' data-testid='Tags-container'>
            {renderTags()}
        </Container>
    );
}

export default Tags;
