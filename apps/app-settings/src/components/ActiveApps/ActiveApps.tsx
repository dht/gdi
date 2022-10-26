import React, { useCallback } from 'react';
import { Avatar, TrianglesBk, Toggle } from '@gdi/web-ui';
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
    ToggleWrapper,
    ToggleAll,
} from './ActiveApps.style';
import { SettingsTab } from '../SettingsTab/SettingsTab';
import { tabs } from '../SettingsTab/SettingsTab.data';

import bytes from 'bytes';
import { useLocalStorage, useToggle } from 'react-use';

const ACTIVE_APPS_LOCAL_STORAGE_KEY = 'active-apps';

export type ActiveAppsProps = {
    me: IUser;
    users: IUser[];
    activeApps: IActiveApp[];
    stats: IActiveAppStats;
};

export function ActiveApps(props: ActiveAppsProps) {
    const { me, activeApps, stats } = props;
    const { count, totalSize: allAppsSize } = stats;
    const [toggleAll, setToggleAll] = useToggle(false);

    const { displayName, photoURL } = me;

    const [activeState, patchActiveState] = useLocalStorage<
        Record<string, boolean>
    >(ACTIVE_APPS_LOCAL_STORAGE_KEY, {
        dashboard: true,
        login: true,
        mixer: true,
        settings: true,
    });

    const onToggleAll = useCallback(
        (ev: any, checked: boolean) => {
            setToggleAll(checked);

            const all = Object.values(activeApps).reduce((acc, app) => {
                acc[app.id] = checked;
                return acc;
            }, {} as Json);

            console.log('all ->', all);

            patchActiveState({
                ...all,
                dashboard: true,
                login: true,
                mixer: true,
                settings: true,
            });
        },
        [activeState]
    );

    const toggleApp = useCallback(
        (appId: string) => {
            patchActiveState({
                ...activeState,
                [appId]: !(activeState ?? {})[appId],
            });
        },
        [activeState]
    );

    function renderActiveApp(activeApp: IActiveApp) {
        const { title, nodeCount, totalSize, color, description } = activeApp;

        const sizeColor = totalSize > 1000 ? 'gold' : 'gray';

        return (
            <AppRow key={activeApp.id} className='user'>
                <AppField>
                    <Color value={color} />
                </AppField>
                <AppField color='pink'>{title}</AppField>
                <AppField>{nodeCount}</AppField>
                <AppField color={sizeColor}>{bytes(totalSize)}</AppField>
                <AppField>{description}</AppField>
                <ToggleWrapper>
                    <Toggle
                        readOnly={activeApp.isRequired}
                        value={(activeState as any)[activeApp.id]}
                        onChange={() => toggleApp(activeApp.id)}
                    />
                </ToggleWrapper>
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
                    <ToggleAll>
                        <Toggle value={toggleAll} onChange={onToggleAll} />
                    </ToggleAll>
                    <Apps>{renderApps()}</Apps>
                </Column>
            </Content>
        </Container>
    );
}

export default ActiveApps;
