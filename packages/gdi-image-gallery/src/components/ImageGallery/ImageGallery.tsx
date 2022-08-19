import React from 'react';
import ImageOverlay from '../ImageOverlay/ImageOverlay';
import Masonry, { IItem } from '../Masonry/Masonry';
import TopBar from '../TopBar/TopBar';
import { Container, Content } from './ImageGallery.style';

export type ImageGalleryProps = {
    columns?: number;
};

export function ImageGallery(props: ImageGalleryProps) {
    const { columns } = props;

    function renderOverlay(item: IItem) {
        return <ImageOverlay />;
    }

    return (
        <Container
            className='ImageGallery-container'
            data-testid='ImageGallery-container'
        >
            <TopBar />
            <Content>
                <Masonry columns={columns} renderOverlay={renderOverlay} />
            </Content>
        </Container>
    );
}

export default ImageGallery;
