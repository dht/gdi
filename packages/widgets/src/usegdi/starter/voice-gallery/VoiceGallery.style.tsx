import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #fff;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 250px;
`;

export const Card = styled.div`
  width: calc(14% - 5px);
  height: 100rem;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  float: left;
  position: relative;
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  border: 1px solid rgba(0, 0, 0, 0.4);
  cursor: pointer;
  margin: 2px;

  @media (max-width: 800px) {
    width: calc(33% - 5px);
    height: 100rem;
  }

  &:hover,
  &.selected {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #db70943e;
    }
  }
`;

export const Name = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
  max-width: 100%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 12px;
  padding: 1px 2px;
`;

export const Column = styled.div`
  width: 180px;
  background-color: #334;
  padding: 10px;
  color: white;
  font-size: 12px;
`;

export const Details = styled.div`
  font-size: 12px;
  padding: 10px;
`;

export const BigImage = styled.div`
  width: 170px;
  height: 170px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;
`;

export const BigName = styled.div`
  font-size: 22px;
  margin-bottom: 3px;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Description = styled.div`
  font-size: 15px;
  margin-top: 10px;
  opacity: 0.6;
`;

export const Items = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Provider = styled.div`
  color: #ccc;

  span {
    color: gold;
  }
`;
