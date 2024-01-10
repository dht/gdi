import styled from 'styled-components';

export const Wrapper = styled.div.attrs<{
  style: React.CSSProperties;
  backgroundColor?: string;
}>((props) => ({
  style: props.style,
  backgroundColor: props.backgroundColor ?? '#aaa',
}))`
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5rem;
  overflow: hidden;

  &:hover {
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.05);
      border: 1px solid gold;
      pointer-events: none;
    }
  }

  &.visible {
    .masonry-image {
      display: block;
    }
  }

  &.focused {
    z-index: 999;
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.05);
      border: 5px solid gold;
      pointer-events: none;
    }
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  user-select: none;
`;

export const Images = styled.div`
  position: relative;
  height: 100%;
`;

export const Image = styled.div.attrs<{ url: string }>((props) => ({
  style: {
    backgroundImage: `url(${props.url})`,
  },
}))`
  position: absolute;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
