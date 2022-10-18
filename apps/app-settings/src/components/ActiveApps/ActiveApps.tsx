import React from 'react';
import { Avatar, TrianglesBk } from '@gdi/web-ui';
import {
    Column,
    Container,
    Content,
    Details,
    TotalSize,
    Me,
    TotalCount,
    Top,
    Color,
    AppField,
    AppRow,
    Apps,
    SettingsWrapper,
} from './ActiveApps.style';
import { SettingsTab } from '../SettingsTab/SettingsTab';
import { tabs } from '../SettingsTab/SettingsTab.data';

import bytes from 'bytes';

export type ActiveAppsProps = {
    me: IUser;
    users: IUser[];
    activeApps: IActiveApp[];
    stats: IActiveAppStats;
};

export function ActiveApps(props: ActiveAppsProps) {
    const { me, activeApps, stats } = props;
    const { count, totalSize: allAppsSize } = stats;

    const { displayName, photoURL } = me;

    function renderActiveApp(activeApp: IActiveApp) {
        const { title, nodeCount, totalSize, color, description } = activeApp;

        return (
            <AppRow key={activeApp.id} className='user'>
                <AppField>
                    <Color value={color} />
                </AppField>
                <AppField color='pink'>{title}</AppField>
                <AppField>{nodeCount}</AppField>
                <AppField color='gold'>{bytes(totalSize)}</AppField>
                <AppField>{description}</AppField>
            </AppRow>
        );
    }

    function renderApps() {
        return activeApps.map((activeApp: IActiveApp) =>
            renderActiveApp(activeApp)
        );
    }

    return (
        <Container
            className='ActiveApps-container'
            data-testid='ActiveApps-container'
        >
            <Top>
                <TrianglesBk>
                    <Details>
                        <Avatar
                            size={100}
                            imageUrl={photoURL}
                            name={displayName}
                        />
                        <Me>
                            <TotalCount>{count} apps</TotalCount>
                            <TotalSize>{bytes(allAppsSize)}</TotalSize>
                        </Me>
                        <SettingsWrapper>
                            <SettingsTab
                                tabs={tabs}
                                selectedTabId='activeApps'
                            />
                        </SettingsWrapper>
                    </Details>
                </TrianglesBk>
            </Top>
            <Content>
                <Column></Column>
                <Column>
                    <Apps>{renderApps()}</Apps>
                </Column>
            </Content>
        </Container>
    );
}

export default ActiveApps;
