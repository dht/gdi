import React, { useMemo } from 'react';
import { Container } from './Preview.style';
import { EngineView, LibraryBuilder } from '@gdi/engine';
import { initTemplates as initTemplatesGdi } from '@gdi/template-gdi';
import { initTemplates as initTemplatesBlog } from '@gdi/template-blog';

export type PreviewProps = {
    elements: IElement[];
};

export function Preview(props: PreviewProps) {
    const { elements } = props;

    const libraryBuilder = useMemo(() => {
        const libraryBuilder = new LibraryBuilder();
        initTemplatesGdi(libraryBuilder as any);
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
