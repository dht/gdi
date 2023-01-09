import React from 'react';
import { Json } from 'redux-connected/dist/dts/types';
import { Wrapper } from './Masonry.style';

type IImage = {
    id: string;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
    ratio: number;
};

export type MasonryProps = {
    items: IImage[];
};

export function Masonry(props: MasonryProps) {
    const { items } = props;

    function renderItem(image: IImage) {
        return <Image key={image.id} className='image'></Image>;
    }

    function renderItems() {
        return items.map((image: IImage) => renderItem(image));
    }
    return (
        <Wrapper className='Masonry-wrapper' data-testid='Masonry-wrapper'>
            {renderItems()}
        </Wrapper>
    );
}

export default Masonry;
