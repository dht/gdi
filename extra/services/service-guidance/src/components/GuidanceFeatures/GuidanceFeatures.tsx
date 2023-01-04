import React from 'react';
import { TabbedPages } from '@gdi/web-ui';
import { Wrapper } from './GuidanceFeatures.style';
import { tabs } from '../../data/data.tabs';

export type GuidanceFeaturesProps = {};

export function GuidanceFeatures(props: GuidanceFeaturesProps) {
    return (
        <Wrapper
            className='GuidanceFeatures-wrapper'
            data-testid='GuidanceFeatures-wrapper'
        >
            <TabbedPages
                avatarUrl={'https://static-b9ebe.web.app/Logo.jpg'}
                tabs={tabs}
                selectedTabId='features'
                paletteIndex={8}
                topHeight='200px'
            >
                <div>a</div>
            </TabbedPages>
        </Wrapper>
    );
}

export default GuidanceFeatures;
