import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  font-size: 20px;
`;

export const Group = styled.div``;

export const GroupTitle = styled.div`
  font-size: 15px;
  color: white;
  padding: 10px;
  text-indent: 20px;
  text-transform: capitalize;
`;

export const GroupContent = styled.div``;

export const Item = styled.div`
  color: white;
  font-size: 14px;
  line-height: 1.5;
  margin: 5px;
  border-radius: 15px;
  padding: 10px;

  &.selected {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ItemTitle = styled.div`
  font-weight: bold;
`;

export const ItemSubtitle = styled.div`
  opacity: 0.5;
`;

export const ItemTime = styled.div``;

export const ItemPreview = styled.div``;

export const ItemFolder = styled.div`
  opacity: 0.5;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.div`
  max-height: 600px;
  overflow: auto;
`;
