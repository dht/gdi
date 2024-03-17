import classnames from 'classnames';
import { useRef } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { useLocalStorage, useWindowSize } from 'react-use';
import { IPoint } from '../../types';
import Icon from '../Icon/Icon';
import { Actions, Content, Header, Title, Wrapper } from './Panel.style';
import { isMobile } from '../../utils/mobile';

const PANEL_POSITION_LOCAL_STORAGE_KEY = 'PANEL_POSITION';

export type PanelProps = {
  id: string;
  title: string;
  children: JSX.Element | JSX.Element[];
  onClose: () => void;
  transparent?: boolean;
  width?: number;
  height?: number;
  className?: string;
};

export function Panel(props: PanelProps) {
  const { id, title, transparent, width = 0, height = 0 } = props;
  const draggableRef = useRef(null);
  const { width: w, height: h } = useWindowSize();
  const x = isMobile() ? 0 : w / 2 - width / 2;
  const y = isMobile() ? 0 : h / 2 - height / 2 - 100;

  const [delta, setDelta] = useLocalStorage<IPoint>(`${PANEL_POSITION_LOCAL_STORAGE_KEY}_${id}`, {
    x,
    y,
  });

  function onStopDragging(_e: DraggableEvent, data: DraggableData) {
    const { x, y } = data;
    setDelta({ x, y });
  }

  const className = classnames('Panel-wrapper', props.className, {
    transparent,
  });

  const classNameContent = classnames('content', {
    transparent,
  });

  const style = {
    width,
    minHeight: height,
    maxHeight: height,
  };

  const Cmp: any = Draggable;

  return (
    <Cmp nodeRef={draggableRef} onStop={onStopDragging} defaultPosition={delta} handle='.header'>
      <Wrapper className={className} data-testid='Panel-wrapper' ref={draggableRef}>
        <Header className='header'>
          <Title>{title}</Title>
          <Actions>
            <Icon name='cancel' onClick={props.onClose} />
          </Actions>
        </Header>
        <Content style={style} className={classNameContent}>
          {props.children}
        </Content>
      </Wrapper>
    </Cmp>
  );
}

export default Panel;
