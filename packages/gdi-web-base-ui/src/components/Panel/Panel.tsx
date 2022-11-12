import React, { useRef } from 'react';
import { Icon } from '@fluentui/react';
import { Actions, Container, Content, Header, Title } from './Panel.style';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { useLocalStorage } from 'react-use';
import classnames from 'classnames';
import { IPoint } from '../../types';

const PANEL_POSITION_LOCAL_STORAGE_KEY = 'PANEL_POSITION';

export type PanelProps = {
    id: string;
    title: string;
    children: JSX.Element | JSX.Element[];
    onClose: () => void;
    transparent?: boolean;
};

export function Panel(props: PanelProps) {
    const { id, title, transparent } = props;
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

    const Cmp: any = Draggable;

    const className = classnames('Panel-container', {
        transparent,
    });

    const classNameContent = classnames('content', {
        transparent,
    });

    return (
        <Cmp
            nodeRef={draggableRef}
            onStop={onStopDragging}
            defaultPosition={delta}
            handle='.header'
        >
            <Container
                className={className}
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
                <Content className={classNameContent}>{props.children}</Content>
            </Container>
        </Cmp>
    );
}

export default Panel;
