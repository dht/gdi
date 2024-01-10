import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { useCallback } from 'react';
import { useLocalStorage } from 'react-use';
import { useRef } from 'react';
import {
  Avatar,
  Icon,
  BarItemActions,
  BarItemTitle,
  BarItemWrapper,
  Wrapper,
  PopoiActions,
  PopoiContent,
  PopoiHeader,
  PopoiTitle,
  PopoiWindow,
  PopoiWrapper,
} from './ContextBar.style';
import classnames from 'classnames';

export enum PopoiState {
  CLOSED = 'CLOSED',
  OPEN = 'OPEN',
  FLOATING = 'FLOATING',
}

export type IPopoi = {
  id: string;
  order?: number;
  state: PopoiState;
  title: string;
  iconUrl?: string;
  widgetId?: string;
};

export type IPopois = Record<string, IPopoi>;

export type ContextBarProps = {
  items: Record<string, IPopoi>;
  renderWidget: (widgetId: string) => JSX.Element | null;
  onMaximize: (item: IPopoi) => void;
  onOpen: (item: IPopoi) => void;
  onClose: (item: IPopoi) => void;
  onExit: (item: IPopoi) => void;
  isDarkMode?: boolean;
};

export function ContextBar(props: ContextBarProps) {
  const { items, isDarkMode } = props;

  const isEmpty = Object.values(items).length === 0;

  const [delta, setDelta] = useLocalStorage<IPoint>('DEV_PANEL_LOCATION', {
    x: 0,
    y: 0,
  });

  function onStopDragging(_e: DraggableEvent, data: DraggableData) {
    const { x, y } = data;
    setDelta({ x, y });
  }

  if (isEmpty) {
    return null;
  }

  function renderItem(popoi: IPopoi, index: number) {
    return (
      <Popoi
        renderWidget={props.renderWidget}
        onMaximize={props.onMaximize}
        onOpen={props.onOpen}
        onClose={props.onClose}
        onExit={props.onExit}
        key={index}
        item={popoi}
        onStopDragging={onStopDragging}
      />
    );
  }

  function renderItems() {
    return Object.values(items).map((popoi: IPopoi, index: number) => renderItem(popoi, index));
  }

  const className = classnames('ContextBar-wrapper', {
    darkMode: isDarkMode,
  });

  return (
    <Wrapper className={className} data-testid='ContextBar-wrapper'>
      {renderItems()}
    </Wrapper>
  );
}

type PopoiProps = {
  item: IPopoi;
  renderWidget: (widgetId: string) => JSX.Element | null;
  onMaximize: (item: IPopoi) => void;
  onOpen: (item: IPopoi) => void;
  onClose: (item: IPopoi) => void;
  onExit: (item: IPopoi) => void;
  onStopDragging: (_e: DraggableEvent, data: DraggableData) => void;
  draggableDelta?: IPoint;
};

export function Popoi(props: PopoiProps) {
  const { item } = props;
  const { title, state, widgetId } = item;
  const draggableRef = useRef(null);

  const onToggle = useCallback(() => {
    switch (item.state) {
      case PopoiState.CLOSED:
        props.onOpen(item);
        break;
      case PopoiState.OPEN:
        props.onClose(item);
        break;
    }
  }, [item.state]);

  function renderActions() {
    return (
      <PopoiActions>
        {state === PopoiState.OPEN && (
          <Icon className='material-icons' onClick={() => props.onMaximize(item)}>
            fullscreen
          </Icon>
        )}
        {state === PopoiState.FLOATING && (
          <Icon className='material-icons' onClick={() => props.onOpen(item)}>
            minimize
          </Icon>
        )}
        <Icon className='material-icons' onClick={() => props.onClose(item)}>
          close
        </Icon>
      </PopoiActions>
    );
  }

  function renderWindow() {
    return (
      <PopoiWindow ref={draggableRef}>
        <PopoiHeader className='header'>
          <PopoiTitle>{title}</PopoiTitle>
          {renderActions()}
        </PopoiHeader>
        <PopoiContent>{props.renderWidget(widgetId!)}</PopoiContent>
      </PopoiWindow>
    );
  }

  function renderInner() {
    if (state === PopoiState.CLOSED) {
      return null;
    }

    if (state === PopoiState.FLOATING) {
      const Cmp: any = Draggable;
      return (
        <Cmp
          nodeRef={draggableRef}
          onStop={props.onStopDragging}
          defaultPosition={props.draggableDelta}
          handle='.header'
        >
          {renderWindow()}
        </Cmp>
      );
    }

    return renderWindow();
  }

  return (
    <PopoiWrapper>
      {renderInner()}
      <BarItem item={item} onToggle={onToggle} onExit={() => props.onExit(item)} />
    </PopoiWrapper>
  );
}

type BarItemProps = {
  item: IPopoi;
  onToggle: () => void;
  onExit: () => void;
};

export function BarItem(props: BarItemProps) {
  const { item } = props;
  const { title, iconUrl } = item;

  function onExit(ev: any) {
    ev.stopPropagation();
    props.onExit();
  }

  return (
    <BarItemWrapper onClick={props.onToggle}>
      {iconUrl && <img src={iconUrl} />}
      <BarItemTitle>{title}</BarItemTitle>
      <BarItemActions className='barItem-actions'>
        <Icon className='material-icons' onClick={onExit}>
          close
        </Icon>
      </BarItemActions>
    </BarItemWrapper>
  );
}

export default ContextBar;
