import React, { Key, useCallback } from 'react';
import { Chevron, Container, Header, Title, Content } from './Accordion.style';
import { useSetState, useMount } from 'react-use';
import { Icon } from '@fluentui/react';

export type AccordionProps = {
    children: JSX.Element[];
};

export function Accordion(props: AccordionProps) {
    const [state, patchState] = useSetState<Record<string, boolean>>({});

    useMount(() => {
        patchState({ Library: true });
    });

    const togglePanel = useCallback(
        (key: Key | null, ev: any) => {
            const solo = ev.altKey || ev.metaKey || ev.ctrlKey;

            if (solo) {
                const keys = props.children.map((item) => item.key);
                const change = keys.reduce(
                    (output, key) => ({ ...output, [key || '']: false }),
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

    function renderPanel(panel: JSX.Element) {
        const flex = panel.props['flex'];

        return (
            <React.Fragment key={panel.key}>
                <Header onClick={(ev) => togglePanel(panel.key, ev)}>
                    <Chevron open={state[panel.key || '']}>
                        <Icon iconName='ChevronRightMed' />
                    </Chevron>

                    <Title>{panel.key}</Title>
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
            {renderPanels(props.children)}
        </Container>
    );
}

export default Accordion;
