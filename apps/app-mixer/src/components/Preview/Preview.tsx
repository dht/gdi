import React, { useMemo } from 'react';
import { Container } from './Preview.style';
import { EngineView, LibraryBuilder } from '@gdi/engine';
import { initTemplates as initTemplatesBasic } from '@gdi/template-basic';
import { initTemplates as initTemplatesMinimalist } from '@gdi/template-minimalist';
import { initTemplates as initTemplatesBlog } from '@gdi/template-blog';

export type PreviewProps = {
    elements: IElement[];
};

export function Preview(props: PreviewProps) {
    const { elements } = props;

    const libraryBuilder = useMemo(() => {
        const libraryBuilder = new LibraryBuilder();
        initTemplatesBasic(libraryBuilder as any);
        initTemplatesMinimalist(libraryBuilder as any);
        initTemplatesBlog(libraryBuilder as any);
        return libraryBuilder;
    }, []);

    return (
        <Container
            className='Preview-container'
            data-testid='Preview-container'
        >
            <EngineView elements={elements} libraryBuilder={libraryBuilder} />
        </Container>
    );
}

export default Preview;
