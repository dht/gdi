import React from 'react';
import { Image, Item, Wrapper } from './Instush.style';

export type InstushProps = {};

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => ({
    id: item,
    imageUrl: `https://picsum.photos/400/400?random=${item}`,
}));

export function Instush(_props: InstushProps) {
    function renderItem(item: any) {
        return (
            <Item key={item.id} className='item'>
                <Image src={item.imageUrl} />
            </Item>
        );
    }

    function renderItems() {
        return items.map((item: any) => renderItem(item));
    }
    return (
        <Wrapper className='Instush-wrapper' data-testid='Instush-wrapper'>
            {renderItems()}
        </Wrapper>
    );
}

export default Instush;
