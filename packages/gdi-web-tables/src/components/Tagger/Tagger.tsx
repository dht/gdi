import React from 'react';
import { Button, Tag } from '@gdi/web-base-ui';
import { Container } from './Tagger.style';

export type TaggerProps = {
    tag?: string;
    onClick: (tag: string) => void;
    onClear: () => void;
};

export function Tagger(props: TaggerProps) {
    const { tag } = props;

    return (
        <Container className='Tagger-container' data-testid='Tagger-container'>
            <Button iconName='tag' onClick={() => props.onClick('')} />
            {tag && (
                <Tag
                    tag={tag}
                    color='cyan'
                    onClick={() => props.onClick(tag)}
                    onDelete={props.onClear}
                />
            )}
        </Container>
    );
}

export default Tagger;
