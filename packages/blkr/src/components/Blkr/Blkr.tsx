import React from 'react';
import { useBlkr } from '../../hooks/useBlkr';
import Badge from '../Badge/Badge';
import PriceTag from '../PriceTag/PriceTag';
import {
    BadgeWrapper,
    BarWrapper,
    Content,
    GuidanceWrapper,
    InfoWrapper,
    Item,
    PriceTagWrapper,
    SideBarWrapper,
    Wrapper,
} from './Blkr.style';
import classnames from 'classnames';
import BottomBar from '../BottomBar/BottomBar';
import SideBar from '../SideBar/SideBar';
import { useWindowSize } from 'react-use';

export type BlkrProps = {
    paddingLeft?: number;
};

export function Blkr(props: BlkrProps) {
    const { paddingLeft = 0 } = props;
    const { width, height } = useWindowSize();

    const [items, { next }] = useBlkr({
        withKeys: true,
    });

    function renderItem(item: Json) {
        const { position, color } = item;

        const style = {
            backgroundColor: color,
        };

        const className = classnames('item', position);

        return (
            <Item
                width={width - 200 - paddingLeft}
                height={height - 100}
                key={item.id}
                className={className}
                style={style}
                paddingLeft={paddingLeft}
            >
                item {item.id} ({position})
            </Item>
        );
    }

    function renderItems() {
        return items.map((item: Json) => renderItem(item));
    }

    return (
        <Wrapper className='Blkr-wrapper' data-testid='Blkr-wrapper'>
            <Content>{renderItems()}</Content>
            <SideBarWrapper>
                <SideBar />
            </SideBarWrapper>
            <BarWrapper>
                <BottomBar />
            </BarWrapper>
            <InfoWrapper></InfoWrapper>
            <GuidanceWrapper></GuidanceWrapper>
            <BadgeWrapper>
                <Badge />
            </BadgeWrapper>
            <PriceTagWrapper>
                <PriceTag />
            </PriceTagWrapper>
        </Wrapper>
    );
}

export default Blkr;
