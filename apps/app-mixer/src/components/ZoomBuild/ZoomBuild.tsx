import React, { useEffect, useMemo, useState } from 'react';
import { Container, Content } from './ZoomBuild.style';
import { EngineView, LibraryBuilder } from '@gdi/engine';
import { initTemplate as initTemplateStarter } from '@gdi/template-starter';
import { initTemplate as initTemplateTech } from '@gdi/template-tech';
import { initTemplate as initTemplateGdi } from '@gdi/template-gdi';
import { ZoomBuildBar } from '../ZoomBuildBar/ZoomBuildBar';
import { Device } from '@gdi/web-ui';

export type ZoomBuildProps = {
    elements: IElement[];
    widget: IWidget;
    mobileMode: boolean;
    onToggleMobile: (value: boolean) => void;
};

export function ZoomBuild(props: ZoomBuildProps) {
    const { elements, widget, mobileMode } = props;

    const libraryBuilder = useMemo(() => {
        const libraryBuilder = new LibraryBuilder();
        initTemplateStarter(libraryBuilder as any);
        initTemplateTech(libraryBuilder as any);
        initTemplateGdi(libraryBuilder as any);
        return libraryBuilder;
    }, []);

    return (
        <Container
            className='ZoomBuild-container'
            data-testid='ZoomBuild-container'
        >
            <ZoomBuildBar
                widget={widget}
                onToggleMobile={props.onToggleMobile}
                mobileMode={mobileMode}
            />
            <Content>
                <Device isMobile={mobileMode}>
                    <EngineView
                        elements={elements}
                        libraryBuilder={libraryBuilder}
                        isMobile={mobileMode}
                    />
                </Device>
            </Content>
        </Container>
    );
}

export default ZoomBuild;
