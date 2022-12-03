import React from 'react';
import { Button, Tag } from '@gdi/web-base-ui';
import { Wrapper } from './Tagger.style';

export type TaggerProps = {
    tag?: string;
    onClick: (tag: string) => void;
    onClear: () => void;
};

export function Tagger(props: TaggerProps) {
    const { tag } = props;

    return (
        <Wrapper className='Tagger-wrapper' data-testid='Tagger-wrapper'>
            <Button iconName='tag' onClick={() => props.onClick('')} />
            {tag && (
                <Tag
                    tag={tag}
                    color='cyan'
                    onClick={() => props.onClick(tag)}
                    onDelete={props.onClear}
                />
            )}
        </Wrapper>
    );
}

export default Tagger;
