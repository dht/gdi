import React, { useRef } from 'react';
import { Icon } from '@fluentui/react';
import { Actions, Container, Content, Header, Title } from './Panel.style';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { useLocalStorage } from 'react-use';

const PANEL_POSITION_LOCAL_STORAGE_KEY = 'PANEL_POSITION';

export type PanelProps = {
    id: string;
    title: string;
    children: JSX.Element | JSX.Element[];
    onClose: () => void;
};

export function Panel(props: PanelProps) {
    const { id, title } = props;
    const draggableRef = useRef(null);

    const [delta, setDelta] = useLocalStorage<IPoint>(
        `${PANEL_POSITION_LOCAL_STORAGE_KEY}_${id}`,
        {
            x: 0,
            y: 0,
        }
    );

    function onStopDragging(_e: DraggableEvent, data: DraggableData) {
        const { x, y } = data;
        setDelta({ x, y });
    }

    return (
        <Draggable
            nodeRef={draggableRef}
            onStop={onStopDragging}
            defaultPosition={delta}
            handle='.header'
        >
            <Container
                className='Panel-container'
                data-testid='Panel-container'
                ref={draggableRef}
            >
                <Header className='header'>
                    <Title>{title}</Title>
                    <Actions>
                        <Icon
                            className='icon'
                            iconName='Cancel'
                            onClick={props.onClose}
                        />
                    </Actions>
                </Header>
                <Content>{props.children}</Content>
            </Container>
        </Draggable>
    );
}

export default Panel;
