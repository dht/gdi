import { IBlockInfo } from '@gdi/engine';
import { IImageWithBlock } from '@gdi/store-mixer';
import { Tag, Tags } from '@gdi/web-ui';
import React, { useEffect, useRef, useState } from 'react';
import { Container, TagsWrapper, TemplateWrapper } from './BlockOverlay.style';

export type BlockOverlayProps = {
    item: IImageWithBlock;
    viewMode: string;
};

export function BlockOverlay(props: BlockOverlayProps) {
    const { item, viewMode } = props;
    const { block } = item;
    const ref = useRef<HTMLDivElement>(null);
    const { tags, id } = block as IBlockInfo;
    const [height, setHeight] = useState(0);

    const regexTemplate = /templates.([a-z]+)/g;

    const match = regexTemplate.exec(id);

    let templateName = match ? match[1] : '';

    useEffect(() => {
        if (!ref.current) {
            return;
        }
        const box = ref.current.getBoundingClientRect();
        setHeight(box.height);
    }, [ref]);

    function renderInner() {
        if (viewMode === 'minimal' || height < 50) {
            return null;
        }

        return (
            <>
                <TagsWrapper>
                    <Tags color='type' tags={tags}></Tags>
                </TagsWrapper>
                <TemplateWrapper>
                    <Tag tag={templateName} color='pink' />
                </TemplateWrapper>
            </>
        );
    }

    return (
        <Container
            className='BlockOverlay-container'
            data-testid='BlockOverlay-container'
            ref={ref}
        >
            {renderInner()}
        </Container>
    );
}

export default BlockOverlay;
