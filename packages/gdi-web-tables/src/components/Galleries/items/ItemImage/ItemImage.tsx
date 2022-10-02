import React, { useEffect, useState } from 'react';
import { IItem } from '../../../Masonry/Masonry';
import { Container, Image, ImageOverlay } from './ItemImage.style';

export type ItemImageProps = {
    item: IItem;
    renderOverlay: (item: IItem) => JSX.Element | null;
    onClick: (id: string, item: IItem) => void;
    onDoubleClick: (id: string) => void;
};

export function ItemImage(props: ItemImageProps) {
    const { item: image } = props;
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
            onMouseDown={() => props.onClick(id, image)}
            className='ItemImage-container'
            onDoubleClick={() => props.onDoubleClick(id)}
            onMouseOver={() => setShowFull(true)}
        >
            {/* @ts-expect-error */}
            <Image url={imageThumbUrl} className='masonry-image' />
            {renderFull()}
            <ImageOverlay>{props.renderOverlay(image)}</ImageOverlay>
        </Container>
    );
}

export default ItemImage;
