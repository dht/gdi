import React, { useEffect, useMemo, useRef } from 'react';
import { Container } from './PreviewFull.style';
import { EngineView, LibraryBuilder } from '@gdi/engine';
import { initTemplate as initTemplateStarter } from '@gdi/template-starter';
import { initTemplate as initTemplateGdi } from '@gdi/template-gdi';
import { initTemplate as initTemplateCard } from '@gdi/template-card';
import { invokeEvent } from 'shared-base';
import { useWindowSize } from 'react-use';

export type PreviewFullProps = {
    elements: IElement[];
    widget: IWidget;
    datasets: Json;
    mobileMode: boolean;
    onToggleMobile: (value: boolean) => void;
};

export function PreviewFull(props: PreviewFullProps) {
    const { width } = useWindowSize();

    const { elements, datasets, mobileMode } = props;

    const libraryBuilder = useMemo(() => {
        const libraryBuilder = new LibraryBuilder();
        initTemplateStarter(libraryBuilder as any);
        initTemplateGdi(libraryBuilder as any);
        initTemplateCard(libraryBuilder as any);
        return libraryBuilder;
    }, []);

    useEffect(() => {
        if (width === 0) {
            return;
        }

        document.body.classList.add('hide-menu');

        const isMobile = width < 768;

        props.onToggleMobile(isMobile);

        return () => {
            document.body.classList.remove('hide-menu');
        };
    }, [width]);

    return (
        <Container
            className='PreviewFull-container'
            data-testid='PreviewFull-container'
        >
            <EngineView
                elements={elements}
                libraryBuilder={libraryBuilder}
                isMobile={mobileMode}
                datasets={datasets}
                backgroundColor='#fff'
            />
        </Container>
    );
}

export default PreviewFull;
