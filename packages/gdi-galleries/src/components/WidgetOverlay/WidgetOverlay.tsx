import { Tag, Tags } from '@gdi/web-ui';
import React, { useEffect, useRef, useState } from 'react';
import { Container, TagsWrapper, TemplateWrapper } from './WidgetOverlay.style';

export type WidgetOverlayProps = {
    item: IImageWithWidget;
    viewMode: string;
};

export function WidgetOverlay(props: WidgetOverlayProps) {
    const { item, viewMode } = props;
    const { widget } = item;
    const ref = useRef<HTMLDivElement>(null);
    const { tags, id } = widget;
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
            className='WidgetOverlay-container'
            data-testid='WidgetOverlay-container'
            ref={ref}
        >
            {renderInner()}
        </Container>
    );
}

export default WidgetOverlay;
