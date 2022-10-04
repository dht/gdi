import styled from 'styled-components';

export const Container = styled.div.attrs<{
    style: React.CSSProperties;
    backgroundColor?: string;
}>((props) => ({
    style: props.style,
    backgroundColor: props.backgroundColor || '#aaa',
}))`
    position: absolute;

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

export const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    user-select: none;
`;

export const Images = styled.div`
    position: relative;
    height: 200px;
`;

export const Image = styled.div.attrs<{ url: string }>((props) => ({
    style: {
        backgroundImage: `url(${props.url})`,
    },
}))`
    position: absolute;
    background-size: cover;
    background-position: center center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;
