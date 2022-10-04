import React, { useEffect, useState } from 'react';
import { IItem, MasonryItemProps } from '../../../Masonry/Masonry';
import { Container, Image, ImageOverlay, Images } from './ItemBase.style';

export type ItemBaseProps = MasonryItemProps & {
    item: IItem;
    backgroundColor?: string;
    children?: JSX.Element | JSX.Element[];
};

export function ItemBase(props: ItemBaseProps) {
    const { item: image, backgroundColor } = props;
    const [showFull, setShowFull] = useState(false);

    const { id, style, imageUrl, imageThumbUrl } = image;

    // DOMs are recycled
    useEffect(() => {
        setShowFull(false);
    }, [id]);

    function renderFull() {
        if (!showFull) {
            return;
        }

        // @ts-expect-error
        return <Image url={imageUrl} className='masonry-image' />;
    }

    return (
        <Container
            style={style}
            // @ts-expect-error
            backgroundColor={backgroundColor}
            onMouseDown={() => props.onClick(id, image)}
            className='ItemBase-container'
            onDoubleClick={() => props.onDoubleClick(id)}
            onMouseOver={() => setShowFull(true)}
        >
            <Images>
                {/* @ts-expect-error */}
                <Image url={imageThumbUrl} className='masonry-image' />
                {renderFull()}
            </Images>
            {props.children}
            <ImageOverlay>{props.renderOverlay(image)}</ImageOverlay>
        </Container>
    );
}

export default ItemBase;
