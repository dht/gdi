import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../store';
import Page from '../components/Page/Page';
import { IPage } from '@gdi/store-site';
import { invokeEvent, ts } from 'shared-base';
import { useMount } from '@fluentui/react-hooks';

export type PageContainerProps = {
    page: IPage;
};

export const PageContainer = (props: PageContainerProps) => {
    const { page } = props;
    const { pageInstanceId } = page;

    const elements = useSelector(selectors.base.$instances);
    const datasets = useSelector(selectors.raw.$rawDatasets);

    const elementsFiltered = elements.filter(
        (item) => item.pageInstanceId === pageInstanceId
    );

    useMount(() => {
        invokeEvent('GA_DEFAULTS', {
            pageInstanceId,
        });
    });

    return <Page elements={elementsFiltered} datasets={datasets} />;
};
