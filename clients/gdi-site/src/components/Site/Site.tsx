import React, { useMemo } from 'react';
import { Wrapper } from './Site.style';
import { EngineView, LibraryBuilder } from '@gdi/engine';
import { initTemplate as initTemplateStarter } from '@gdi/template-starter';
import { initTemplate as initTemplateGdi } from '@gdi/template-gdi';
import { initTemplate as initTemplateCard } from '@gdi/template-card';
import { BuiltWithGdi } from '@gdi/web-ui';
import { Routes, Route } from 'react-router-dom';
import { PageContainer } from '../../containers/PageContainer';
import { IPage } from '@gdi/store-site';
import Loader from '../Loader/Loader';

export type SiteProps = {
    pages: Json;
};

export function Site(props: SiteProps) {
    const { pages } = props;

    function renderRoute(page: IPage) {
        const { path } = page;

        return (
            <Route
                key={page.id}
                path={path}
                element={<PageContainer page={page} />}
            />
        );
    }

    function renderRoutes() {
        return Object.values(pages)
            .filter((page) => page.path)
            .map((page: IPage) => renderRoute(page));
    }

    return (
        <Wrapper className='Site-wrapper' data-testid='Site-wrapper'>
            <Routes>
                {renderRoutes()}
                <Route path='/' element={<Loader />} />
            </Routes>
        </Wrapper>
    );
}

export default Site;
