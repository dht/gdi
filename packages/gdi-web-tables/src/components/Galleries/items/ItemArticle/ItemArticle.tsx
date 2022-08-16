import React, { useEffect, useState } from 'react';
import { MasonryItemProps } from '../../../Masonry/Masonry';
import {
    Author,
    AuthorName,
    Container,
    Description,
    Images,
    Image,
    ImageOverlay,
    Title,
} from './ItemArticle.style';

export type ItemArticleProps = MasonryItemProps & {
    item: IArticle;
};

export function ItemArticle(props: ItemArticleProps) {
    const { item: image } = props;
    const { title, authorName } = image;
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
            <Images>
                {/* @ts-expect-error */}
                <Image url={imageThumbUrl} className='masonry-image' />
                {renderFull()}
            </Images>
            <Description className='description'>
                <Title className='title'>{title}</Title>
                <Author className='author'>
                    By <AuthorName>{authorName}</AuthorName>
                </Author>
            </Description>
            <ImageOverlay>
                {props.renderOverlay(image, { hideTitle: true })}
            </ImageOverlay>
        </Container>
    );
}

export default ItemArticle;
