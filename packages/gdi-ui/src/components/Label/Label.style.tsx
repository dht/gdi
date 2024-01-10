import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  /* text-transform: capitalize; */
  font-size: 14px;
  color: #334;
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* margin-top: 16px; */

  &.error {
    color: #bc0000;
  }

  &.io,
  &.json {
    display: none;
  }
`;

export const LabelText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    display: flex;
    align-items: center;
  }

  svg {
    height: 14px;
    width: 14px;
    color: green;
  }
`;
