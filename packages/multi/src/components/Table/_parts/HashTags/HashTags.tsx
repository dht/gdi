import React from 'react';
import { Wrapper, Tag } from './HashTags.style';
import classnames from 'classnames';

export type HashTagsProps = {
    tags?: string[];
    color?: string;
};

export function HashTags(props: HashTagsProps) {
    const { tags = [], color = 'brown' } = props;

    function renderTag(tag: string) {
        return (
            <Tag key={tag} className='tag'>
                {tag}
            </Tag>
        );
    }

    function renderTags() {
        return tags.map((tag: string) => renderTag(tag));
    }

    return (
        <Wrapper
            className='HashTags-wrapper'
            data-testid='HashTags-wrapper'
            color={color}
        >
            {renderTags()}
        </Wrapper>
    );
}

export default HashTags;
