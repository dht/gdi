import React, { Key, useCallback } from 'react';
import {
    Chevron,
    Container,
    Content,
    Header,
    Title,
    Actions,
} from './Accordion.style';
import { Icon } from '@fluentui/react';
import { useMount, useSetState } from 'react-use';
import classnames from 'classnames';

export type AccordionProps = {
    children: JSX.Element | JSX.Element[];
    renderActions?: (panelKey: string) => JSX.Element | null;
    initialPanel?: string;
    isRtl?: boolean;
};

export function Accordion(props: AccordionProps) {
    const { initialPanel, isRtl } = props;
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

    function renderHeaderActions(panelKey: string) {
        if (!props.renderActions) {
            return null;
        }

        return props.renderActions(panelKey);
    }

    function renderPanel(panel: JSX.Element) {
        const flex = panel.props['flex'];
        const title = panel.props['title'];

        const className = classnames({
            open: state[panel.key ?? ''],
            rtl: isRtl,
        });

        return (
            <React.Fragment key={panel.key}>
                <Header onMouseDown={(ev) => togglePanel(panel.key, ev)}>
                    <Chevron className={className}>
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
