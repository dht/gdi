import React, { useMemo } from 'react';
import { Container } from './Site.style';
import { EngineView, LibraryBuilder } from '@gdi/engine';
import { initTemplates as initTemplatesGdi } from '@gdi/template-gdi';
import { initTemplates as initTemplatesBlog } from '@gdi/template-blog';

export type SiteProps = {
    elements: IElement[];
};

export function Site(props: SiteProps) {
    const { elements } = props;

    const libraryBuilder = useMemo(() => {
        const libraryBuilder = new LibraryBuilder();
        initTemplatesGdi(libraryBuilder as any);
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
