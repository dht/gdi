import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  padding-top: 15px;
`;

export const Link = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const LinkIcon = styled.div`
  padding: 20px;
`;

export const LinkDetails = styled.div``;

export const LinkTitle = styled.div`
  margin-top: 10px;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const LinkSubtitle = styled.div`
  font-size: 15px;
  color: #999;
`;
