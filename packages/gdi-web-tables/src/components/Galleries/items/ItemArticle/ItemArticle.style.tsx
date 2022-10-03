import styled from 'styled-components';

export const Container = styled.div.attrs<{ style: React.CSSProperties }>(
    (props) => ({
        style: props.style,
    })
)`
    position: absolute;
    background-color: #000;

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

export const Title = styled.a`
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    color: white;
    font-variation-settings: 'wdth' 80, 'wght' 650;

    &:hover {
        color: #d2126b;
    }
`;

export const Description = styled.div`
    flex: 1;
    padding: 20px;
`;

export const Author = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    margin-top: 4px;
    text-transform: uppercase;
    font-variation-settings: 'wdth' 75, 'wght' 450;
`;

export const AuthorName = styled.div`
    color: #d2126b;
    margin-left: 5px;
    cursor: pointer;

    &:hover {
        color: #970a4c;
    }
`;

export const Images = styled.div.attrs<{ url: string }>((props) => ({
    style: {
        backgroundImage: `url(${props.url})`,
    },
}))`
    height: 200px;
    position: relative;
`;

export const Image = styled.div.attrs<{ url: string }>((props) => ({
    style: {
        backgroundImage: `url(${props.url})`,
    },
}))`
    background-size: cover;
    background-position: center center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;
