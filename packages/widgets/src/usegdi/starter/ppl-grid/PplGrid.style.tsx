import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  font-size: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 90vh;
  background-color: #112;
`;

export const Item = styled.div`
  width: 20%;
  height: 200px;
  background-color: #333;
  color: white;
  float: left;
  position: relative;
  cursor: pointer;

  &.selected,
  &:hover {
    .image {
      filter: grayscale(0) opacity(1);
    }

    .name {
      color: gold;
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: grayscale(100%) opacity(0.2);
  transition: all 0.3s ease;
`;

export const Name = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  margin: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.3s ease;
`;

export const Header = styled.div`
  font-size: 15px;
  color: white;
  font-weight: 100;
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
`;

export const Items = styled.div``;
