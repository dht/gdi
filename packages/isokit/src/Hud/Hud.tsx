import React, { useContext } from 'react';
import { HudContext, HudContextProvider } from './Hud.context';
import { HudItem } from './parts/HudItem/HudItem';
import { Wrapper } from './Hud.style';
import type {
    IHudConfig,
    IHudItem,
    IHudItemWithPoints,
    ITimeline,
} from './Hud.types';

export type HudProps = {
    config: IHudConfig;
    items: IHudItem[];
    timeline?: ITimeline;
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
        <Wrapper
            className='Hud-wrapper'
            data-testid='Hud-wrapper'
            style={style}
        >
            {renderItems()}
        </Wrapper>
    );
}

export function Hud(props: HudProps) {
    const { config, items, timeline } = props;

    return (
        <HudContextProvider config={config} items={items} timeline={timeline}>
            <HudInner {...props} />
        </HudContextProvider>
    );
}

export default Hud;
