import { useContext } from 'react';
import { HudContext, HudContextProvider } from './Hud.context';
import { Wrapper } from './Hud.style';
import type { IHud, IHudItemWithPoints } from './Hud.types';
import { HudItem } from './parts/HudItem/HudItem';

export type HudProps = {
  hud: IHud;
};

export function HudInner(_props: HudProps) {
  const { state, items } = useContext(HudContext);
  const { width, height } = state;

  const style = {
    minWidth: `${width}px`,
    minHeight: `${height}px`,
  };

  function renderItem(item: IHudItemWithPoints) {
    return <HudItem key={item.id} item={item} />;
  }

  function renderItems() {
    return items.map((item: IHudItemWithPoints) => renderItem(item));
  }

  return (
    <Wrapper className='Hud-wrapper' data-testid='Hud-wrapper' style={style}>
      {renderItems()}
    </Wrapper>
  );
}

export function Hud(props: HudProps) {
  const { hud } = props;

  return (
    <HudContextProvider hud={hud}>
      <HudInner {...props} />
    </HudContextProvider>
  );
}

export default Hud;
