import React, { useMemo } from 'react';
import { Wrapper } from './Page.style';
import { EngineView, LibraryBuilder } from '@gdi/engine';
import { initTemplate as initTemplateStarter } from '@gdi/template-starter';
import { initTemplate as initTemplateGdi } from '@gdi/template-gdi';
import { initTemplate as initTemplateCard } from '@gdi/template-card';
import { BuiltWithGdi } from '@gdi/web-ui';

export type PageProps = {
    elements: IElement[];
    datasets: Json;
};

export function Page(props: PageProps) {
    const { elements, datasets } = props;

    const libraryBuilder = useMemo(() => {
        const libraryBuilder = new LibraryBuilder();
        initTemplateStarter(libraryBuilder as any);
        initTemplateGdi(libraryBuilder as any);
        initTemplateCard(libraryBuilder as any);
        return libraryBuilder;
    }, []);

    return (
        <Wrapper className='Page-wrapper' data-testid='Page-wrapper'>
            <EngineView
                elements={elements}
                libraryBuilder={libraryBuilder}
                datasets={datasets}
                backgroundColor='#fff'
            />
            <BuiltWithGdi
                data={{
                    elements,
                    datasets,
                }}
            />
        </Wrapper>
    );
}

export default Page;
