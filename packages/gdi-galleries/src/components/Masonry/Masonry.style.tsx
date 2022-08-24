import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    position: relative;
`;

export const ImageWrapper = styled.div`
    position: absolute;
    background-color: #112;

    &:hover {
        &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(255, 255, 255, 0.05);
            border: 1px solid gold;
        }
    }

    &.visible {
        .masonry-image {
            display: block;
        }
    }
`;

export const Image = styled.div<{ url: string }>`
    position: absolute;
    background-image: url(${(props) => props.url});
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: none;
`;

export const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    user-select: none;
`;
