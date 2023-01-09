import React from 'react';
import Hud from '../../components/Hud/Hud';
import { Item, Wrapper } from './HudExperience.style';

export type HudExperienceProps = {
    dataset: Json[];
};

export function HudExperience(props: HudExperienceProps) {
    const { dataset } = props;

    function renderItem(item: Json) {
        return (
            <Item
                key={item.id}
                className='item'
                imageUrl={item.imageUrl}
            ></Item>
        );
    }

    function renderItems() {
        return dataset.map((item: Json) => renderItem(item));
    }
    return (
        <Wrapper
            className='HudExperience-wrapper'
            data-testid='HudExperience-wrapper'
        >
            {renderItems()}
        </Wrapper>
    );
}

export default HudExperience;
