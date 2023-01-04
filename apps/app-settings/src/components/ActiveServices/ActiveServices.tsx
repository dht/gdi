import React, { useCallback } from 'react';
import bytes from 'bytes';
import { Toggle, TabbedPages } from '@gdi/web-ui';
import { tabs } from '../../data/data.tabs';
import { useLanguage } from '@gdi/language';
import { useLocalStorage, useToggle } from 'react-use';
import {
    Column,
    Wrapper,
    Content,
    Color,
    ServiceField,
    ServiceRow,
    Services,
    ToggleWrapper,
    ToggleAll,
    Description,
    Flags,
    Version,
} from './ActiveServices.style';

const ACTIVE_SERVICES_LOCAL_STORAGE_KEY = 'active-services';

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
    const { t } = useLanguage();

    const { displayName = '', photoURL } = me;

    const [activeState, patchActiveState] = useLocalStorage<
        Record<string, boolean>
    >(ACTIVE_SERVICES_LOCAL_STORAGE_KEY, {
        guidance: true,
        freelancers: true,
        levelUp: true,
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
            <TabbedPages
                avatarUrl={photoURL}
                avatarName={displayName}
                title={`${count} ${t('services')}`}
                subtitle={bytes(allServicesSize)}
                tabs={tabs}
                selectedTabId='activeServices'
            >
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
            </TabbedPages>
        </Wrapper>
    );
}

export default ActiveServices;
