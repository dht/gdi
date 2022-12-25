import React, { useCallback } from 'react';
import { Avatar, TrianglesBk, Toggle } from '@gdi/web-ui';
import {
    Column,
    Wrapper,
    Content,
    Details,
    TotalSize,
    Me,
    TotalCount,
    Top,
    Color,
    ServiceField,
    ServiceRow,
    Services,
    SettingsWrapper,
    ToggleWrapper,
    ToggleAll,
    Description,
    Flags,
    Version,
} from './ActiveServices.style';
import { SettingsTab } from '../SettingsTab/SettingsTab';
import { tabs } from '../SettingsTab/SettingsTab.data';

import bytes from 'bytes';
import { useLocalStorage, useToggle } from 'react-use';

const ACTIVE_APPS_LOCAL_STORAGE_KEY = 'active-apps';

export type ActiveServicesProps = {
    me: IUser;
    users: IUsers;
    activeServices: IActiveService[];
    stats: IActiveServicesStats;
    templatesMeta: ITemplateMetas;
};

export function ActiveServices(props: ActiveServicesProps) {
    const { me, activeServices = [], stats, templatesMeta } = props;
    const { count, totalSize: allServicesSize } = stats;
    const [toggleAll, setToggleAll] = useToggle(false);

    console.log('templatesMeta ->', templatesMeta);

    const { displayName = '', photoURL } = me;

    const [activeState, patchActiveState] = useLocalStorage<
        Record<string, boolean>
    >(ACTIVE_APPS_LOCAL_STORAGE_KEY, {
        login: true,
        mixer: true,
        settings: true,
    });

    const onToggleAll = useCallback(
        (checked: boolean) => {
            setToggleAll(checked);

            const all = Object.values(activeServices).reduce((acc, app) => {
                acc[app.id] = checked;
                return acc;
            }, {} as Json);

            patchActiveState({
                ...all,
                login: true,
                mixer: true,
                settings: true,
            });
        },
        [activeState]
    );

    const toggleService = useCallback(
        (appId: string) => {
            patchActiveState({
                ...activeState,
                [appId]: !(activeState ?? {})[appId],
            });
        },
        [activeState]
    );

    function renderActiveService(activeService: IActiveService) {
        const { id, title, nodeCount, totalSize, color, description } =
            activeService;

        const sizeColor = totalSize > 1000 ? 'gold' : 'gray';

        const key = id === 'login' ? 'auth' : id;
        const meta = templatesMeta[key] ?? {};
        const { isBeta, isDraft, version } = meta || {};

        const flags = isDraft ? 'draft' : isBeta ? 'beta' : '';

        return (
            <ServiceRow key={activeService.id} className='user'>
                <ServiceField>
                    <Color value={color} />
                </ServiceField>
                <ServiceField color='pink'>
                    {title}
                    <Description>{meta.description}</Description>
                </ServiceField>
                <ServiceField>
                    <Flags className={flags}>{flags}</Flags>
                    <Version>{version}</Version>
                </ServiceField>
                <ServiceField>{nodeCount || '-'}</ServiceField>
                <ServiceField color={sizeColor}>
                    {bytes(totalSize)}
                </ServiceField>
                <ServiceField>{description}</ServiceField>
                <ToggleWrapper>
                    <Toggle
                        readOnly={activeService.isRequired}
                        value={(activeState as any)[activeService.id]}
                        onChange={() => toggleService(activeService.id)}
                    />
                </ToggleWrapper>
            </ServiceRow>
        );
    }

    function renderServices() {
        return activeServices.map((activeService: IActiveService) =>
            renderActiveService(activeService)
        );
    }

    return (
        <Wrapper
            className='ActiveServices-wrapper'
            data-testid='ActiveServices-wrapper'
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
                            <TotalSize>{bytes(allServicesSize)}</TotalSize>
                        </Me>
                        <SettingsWrapper>
                            <SettingsTab
                                tabs={tabs}
                                selectedTabId='activeServices'
                            />
                        </SettingsWrapper>
                    </Details>
                </TrianglesBk>
            </Top>
            <Content>
                <Column></Column>
                <Column>
                    <ToggleAll>
                        <Toggle
                            value={toggleAll}
                            onChange={(_ev: any, checked?: boolean) =>
                                onToggleAll(checked === true)
                            }
                        />
                    </ToggleAll>
                    <Services>{renderServices()}</Services>
                </Column>
            </Content>
        </Wrapper>
    );
}

export default ActiveServices;
