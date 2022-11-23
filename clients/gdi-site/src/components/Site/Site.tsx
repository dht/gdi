import React, { useMemo } from 'react';
import { Container } from './Site.style';
import { EngineView, LibraryBuilder } from '@gdi/engine';
import { initTemplate as initTemplateStarter } from '@gdi/template-starter';
import { initTemplate as initTemplateTech } from '@gdi/template-tech';
import { initTemplate as initTemplateGdi } from '@gdi/template-gdi';
import { initTemplate as initTemplateCard } from '@gdi/template-card';

export type SiteProps = {
    elements: IElement[];
    datasets: Json;
};

export function Site(props: SiteProps) {
    const { elements, datasets } = props;

    const libraryBuilder = useMemo(() => {
        const libraryBuilder = new LibraryBuilder();
        initTemplateStarter(libraryBuilder as any);
        initTemplateTech(libraryBuilder as any);
        initTemplateGdi(libraryBuilder as any);
        initTemplateCard(libraryBuilder as any);
        return libraryBuilder;
    }, []);

    return (
        <Container className='Site-container' data-testid='Site-container'>
            <EngineView
                elements={elements}
                libraryBuilder={libraryBuilder}
                datasets={datasets}
            />
        </Container>
    );
}

export default Site;
