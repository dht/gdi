import React from 'react';
import Tag from '../Tag/Tag';
import { Wrapper } from './Tags.style';

export type TagsProps = {
    tags?: string[];
    color?: string;
    onDelete?: (tag: string) => void;
    size?: 'small' | 'medium' | 'large';
};

export function Tags(props: TagsProps) {
    const { tags = [], color, size = 'medium' } = props;

    function renderTag(tag: string) {
        return (
            <Tag
                size={size}
                key={tag}
                tag={tag}
                color={color}
                onDelete={props.onDelete}
            />
        );
    }

    function renderTags() {
        return tags.map((tag: string) => renderTag(tag));
    }

    return (
        <Wrapper className='Tags-wrapper' data-testid='Tags-wrapper'>
            {renderTags()}
        </Wrapper>
    );
}

export default Tags;
