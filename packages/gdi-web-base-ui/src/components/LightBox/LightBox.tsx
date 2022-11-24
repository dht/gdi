import React, { useEffect, useState } from 'react';
import { useSetState } from 'react-use';
import { useImage } from '../../hooks/useImage';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import { Center, Container, ImageWrapper } from './LightBox.style';

export type LightBoxProps = {
    item: Json;
    onClose: () => void;
};

export function LightBox(props: LightBoxProps) {
    const { item } = props;
    const { title, description, imageUrl } = item;

    const [isLoading, dimensions] = useImage(imageUrl);

    const style = {
        width: dimensions.width + 'px',
        height: dimensions.height + 'px',
        backgroundImage: `url(${imageUrl})`,
    };

    function renderInner() {
        if (isLoading) {
            return (
                <Center>
                    <Loader />
                </Center>
            );
        }

        return (
            <>
                <ImageWrapper style={style}></ImageWrapper>
                <h3>{title}</h3>
                <p>{description}</p>
            </>
        );
    }

    return (
        <Container
            className='LightBox-container'
            data-testid='LightBox-container'
        >
            <Modal title='Image' open={true} onClose={props.onClose}>
                {renderInner()}
            </Modal>
        </Container>
    );
}

export default LightBox;
