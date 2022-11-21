import React, { useMemo } from 'react';
import { Container } from './Preview.style';
import { EngineView, LibraryBuilder } from '@gdi/engine';
import { initTemplate as initTemplateStarter } from '@gdi/template-starter';
import { initTemplate as initTemplateTech } from '@gdi/template-tech';
import { initTemplate as initTemplateGdi } from '@gdi/template-gdi';

export type PreviewProps = {
    elements: IElement[];
};

export function Preview(props: PreviewProps) {
    const { elements } = props;

    const libraryBuilder = useMemo(() => {
        const libraryBuilder = new LibraryBuilder();
        initTemplateStarter(libraryBuilder as any);
        initTemplateTech(libraryBuilder as any);
        initTemplateGdi(libraryBuilder as any);
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
