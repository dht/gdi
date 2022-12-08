import React, { useEffect, useMemo, useState } from 'react';
import { Wrapper, Content } from './ZoomBuild.style';
import { EngineView, LibraryBuilder } from '@gdi/engine';
import { initTemplate as initTemplateStarter } from '@gdi/template-starter';
import { initTemplate as initTemplateGdi } from '@gdi/template-gdi';
import { initTemplate as initTemplateCard } from '@gdi/template-card';
import { ZoomBuildBar } from '../ZoomBuildBar/ZoomBuildBar';
import { Device } from '@gdi/web-ui';

export type ZoomBuildProps = {
    elements: IElement[];
    widget?: IWidget;
    datasets: Json;
    mobileMode: boolean;
    onToggleMobile: (value: boolean) => void;
};

export function ZoomBuild(props: ZoomBuildProps) {
    const { elements, widget, datasets, mobileMode } = props;

    const libraryBuilder = useMemo(() => {
        const libraryBuilder = new LibraryBuilder();
        initTemplateStarter(libraryBuilder as any);
        initTemplateGdi(libraryBuilder as any);
        initTemplateCard(libraryBuilder as any);
        return libraryBuilder;
    }, []);

    return (
        <Wrapper className='ZoomBuild-wrapper' data-testid='ZoomBuild-wrapper'>
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
                        datasets={datasets}
                        backgroundColor='#fff'
                    />
                </Device>
            </Content>
        </Wrapper>
    );
}

export default ZoomBuild;
