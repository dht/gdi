import React, { useMemo } from 'react';
import { Container } from './Site.style';
import { EngineView, LibraryBuilder } from '@gdi/engine';
import { initTemplates as initTemplatesBasic } from '@gdi/template-basic';
import { initTemplates as initTemplatesMinimalist } from '@gdi/template-minimalist';
import { initTemplates as initTemplatesBlog } from '@gdi/template-blog';

export type SiteProps = {
    elements: IElement[];
};

export function Site(props: SiteProps) {
    const { elements } = props;

    const libraryBuilder = useMemo(() => {
        const libraryBuilder = new LibraryBuilder();
        initTemplatesBasic(libraryBuilder as any);
        initTemplatesMinimalist(libraryBuilder as any);
        initTemplatesBlog(libraryBuilder as any);
        return libraryBuilder;
    }, []);

    return (
        <Container className='Site-container' data-testid='Site-container'>
            <EngineView elements={elements} libraryBuilder={libraryBuilder} />
        </Container>
    );
}

export default Site;
