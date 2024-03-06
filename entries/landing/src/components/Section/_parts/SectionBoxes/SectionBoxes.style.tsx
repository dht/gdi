import styled from 'styled-components';
import Container from '../../../Container/Container';

export const Wrapper = styled(Container)`
  flex: 1;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Boxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  height: 1800px;
  margin: auto;
  max-width: 1000px;

  &.triple {
    height: 450px;
  }

  &.long {
    height: 2000px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 0;
    max-width: 100%;

    &.triple {
      height: 600px;
    }

    &.long {
      height: 2200px;
    }
  }
`;

export const Box = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 30px;

  &.triple {
    &:nth-child(1) {
      grid-row-end: span 8;
      grid-column-end: span 1;
    }
    &:nth-child(2) {
      grid-row-end: span 8;
      grid-column-end: span 1;
    }
    &:nth-child(3) {
      grid-row-end: span 8;
      grid-column-end: span 1;
    }
  }

  &.long {
    &:nth-child(1) {
      grid-row-end: span 7;
      grid-column-end: span 1;
    }
    &:nth-child(2) {
      grid-row-end: span 6;
      grid-column-end: span 1;
    }
    &:nth-child(3) {
      grid-row-end: span 7;
      grid-column-end: span 1;
    }
    &:nth-child(4) {
      grid-row-end: span 5;
      grid-column-end: span 1;
    }
    &:nth-child(5) {
      grid-row-end: span 5;
      grid-column-end: span 1;
    }
    &:nth-child(6) {
      grid-row-end: span 5;
      grid-column-end: span 1;
    }
    &:nth-child(7) {
      grid-row-end: span 5;
      grid-column-end: span 1;
    }
    &:nth-child(8) {
      grid-row-end: span 4;
      grid-column-end: span 1;
    }
    &:nth-child(9) {
      grid-row-end: span 5;
      grid-column-end: span 1;
    }
    &:nth-child(10) {
      grid-row-end: span 4;
      grid-column-end: span 1;
    }
    &:nth-child(11) {
      grid-row-end: span 3;
      grid-column-end: span 1;
    }
    &:nth-child(12) {
      grid-row-end: span 5;
      grid-column-end: span 1;
    }
    &:nth-child(13) {
      grid-row-end: span 5;
      grid-column-end: span 1;
    }
    &:nth-child(14) {
      grid-row-end: span 5;
      grid-column-end: span 1;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;

    &.triple {
      &:nth-child(1) {
        grid-row-end: span 8;
        grid-column-end: span 1;
      }
      &:nth-child(2) {
        grid-row-end: span 8;
        grid-column-end: span 1;
      }
      &:nth-child(3) {
        grid-row-end: span 8;
        grid-column-end: span 1;
      }
    }

    &.long {
      &:nth-child(1) {
        grid-row-end: span 4;
        grid-column-end: span 1;
      }
      &:nth-child(2) {
        grid-row-end: span 5;
        grid-column-end: span 1;
      }
      &:nth-child(3) {
        grid-row-end: span 4;
        grid-column-end: span 1;
      }
      &:nth-child(4) {
        grid-row-end: span 5;
        grid-column-end: span 1;
      }
      &:nth-child(5) {
        grid-row-end: span 5;
        grid-column-end: span 1;
      }
      &:nth-child(6) {
        grid-row-end: span 5;
        grid-column-end: span 1;
      }
      &:nth-child(7) {
        grid-row-end: span 5;
        grid-column-end: span 1;
      }
      &:nth-child(8) {
        grid-row-end: span 4;
        grid-column-end: span 1;
      }
      &:nth-child(9) {
        grid-row-end: span 5;
        grid-column-end: span 1;
      }
      &:nth-child(10) {
        grid-row-end: span 4;
        grid-column-end: span 1;
      }
      &:nth-child(11) {
        grid-row-end: span 4;
        grid-column-end: span 1;
      }
      &:nth-child(12) {
        grid-row-end: span 5;
        grid-column-end: span 1;
      }
      &:nth-child(13) {
        grid-row-end: span 5;
        grid-column-end: span 1;
      }
      &:nth-child(14) {
        grid-row-end: span 5;
        grid-column-end: span 1;
      }
    }
  }
`;

export const Image = styled.div`
  width: 80px;
  height: 80px;
  background-size: cover;
  border-radius: 20px;
  background-position: center;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    max-height: 70px;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  margin: 20px 0 15px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Description = styled.div`
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
