import React, { Key, useCallback } from 'react';
import {
    Action,
    Actions,
    Chevron,
    Container,
    Content,
    Header,
    Title,
} from './Accordion.style';
import { Icon } from '@fluentui/react';
import { useMount, useSetState } from 'react-use';

export type AccordionProps = {
    children: JSX.Element | JSX.Element[];
    getHeaderActions?: (panelKey: string) => HeaderAction[];
    onHeaderAction?: (panelKey: string, actionId: string) => HeaderAction[];
    initialPanel?: string;
};

type HeaderAction = {
    id: string;
    iconName: string;
};

export function Accordion(props: AccordionProps) {
    const { initialPanel } = props;
    const [state, patchState] = useSetState<Record<string, boolean>>({});

    const children = Array.isArray(props.children)
        ? props.children
        : [props.children];

    useMount(() => {
        if (initialPanel) {
            patchState({ [initialPanel]: true });
        }
    });

    const togglePanel = useCallback(
        (key: Key | null, ev: any) => {
            const solo = ev.altKey || ev.metaKey || ev.ctrlKey;

            if (solo) {
                const keys = children.map((item) => item.key);
                const change = keys.reduce(
                    (output, key) => ({ ...output, [key ?? '']: false }),
                    {}
                );
                patchState(change);
            }

            if (!key) {
                return;
            }
            patchState({ [key]: !state[key] });
        },
        [state]
    );

    function onHeaderAction(ev: any, panelKey: string, actionId: string) {
        ev.stopPropagation();

        if (props.onHeaderAction) {
            props.onHeaderAction(panelKey, actionId);
        }
    }

    function renderHeaderAction(panelKey: string, action: HeaderAction) {
        return (
            <Action
                key={action.id}
                className='action'
                onClick={(ev) => onHeaderAction(ev, panelKey, action.id)}
            >
                <Icon iconName={action.iconName} />
            </Action>
        );
    }

    function renderHeaderActions(panelKey: string) {
        const actions = props.getHeaderActions
            ? props.getHeaderActions(panelKey)
            : [];

        return actions.map((action: HeaderAction) =>
            renderHeaderAction(panelKey, action)
        );
    }

    function renderPanel(panel: JSX.Element) {
        const flex = panel.props['flex'];
        const title = panel.props['title'];

        return (
            <React.Fragment key={panel.key}>
                <Header onClick={(ev) => togglePanel(panel.key, ev)}>
                    <Chevron open={state[panel.key ?? '']}>
                        <Icon iconName='ChevronRightMed' />
                    </Chevron>

                    <Title>{title || panel.key}</Title>
                    <Actions>
                        {renderHeaderActions(panel.key as string)}
                    </Actions>
                </Header>
                {panel.key && state[panel.key] && (
                    <Content flex={flex}>{panel}</Content>
                )}
            </React.Fragment>
        );
    }

    function renderPanels(panels: JSX.Element[]) {
        return panels.map((panel: JSX.Element) => renderPanel(panel));
    }
    return (
        <Container
            className='Accordion-container'
            data-testid='Accordion-container'
        >
            {renderPanels(children)}
        </Container>
    );
}

export default Accordion;
