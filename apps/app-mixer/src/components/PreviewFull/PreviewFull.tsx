import React, { useEffect, useMemo, useRef } from 'react';
import { Wrapper, WindowSize } from './PreviewFull.style';
import { EngineView, LibraryBuilder } from '@gdi/engine';
import { initTemplate as initTemplateStarter } from '@gdi/template-starter';
import { initTemplate as initTemplateGdi } from '@gdi/template-gdi';
import { initTemplate as initTemplateCard } from '@gdi/template-card';
import { invokeEvent } from 'shared-base';
import { useMount, useWindowSize } from 'react-use';
import { BuiltWithGdi } from '@gdi/web-ui';

export type PreviewFullProps = {
    elements: IElement[];
    widget: IWidget;
    datasets: Json;
    mobileMode: boolean;
    onToggleMobile: (value: boolean) => void;
};

export function PreviewFull(props: PreviewFullProps) {
    const { width, height } = useWindowSize();

    const { elements, datasets, mobileMode } = props;

    const libraryBuilder = useMemo(() => {
        const libraryBuilder = new LibraryBuilder();
        initTemplateStarter(libraryBuilder as any);
        initTemplateGdi(libraryBuilder as any);
        initTemplateCard(libraryBuilder as any);
        return libraryBuilder;
    }, []);

    useMount(() => {
        setTimeout(() => {
            invokeEvent('force-dimensions-clear');
        }, 10);
    });

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
        <Wrapper
            className='PreviewFull-wrapper'
            data-testid='PreviewFull-wrapper'
        >
            <EngineView
                elements={elements}
                libraryBuilder={libraryBuilder}
                isMobile={mobileMode}
                datasets={datasets}
                backgroundColor='#fff'
            />
            <WindowSize>
                {width} x {height}
            </WindowSize>
            <BuiltWithGdi
                data={{
                    elements,
                    libraryBuilder,
                }}
            />
        </Wrapper>
    );
}

export default PreviewFull;
