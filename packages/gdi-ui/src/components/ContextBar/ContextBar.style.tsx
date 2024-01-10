import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #223;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.15);
  border: 1px solid #556;
  color: #eee;
  position: fixed;
  bottom: 30px;
  left: 320px;
  right: 100px;
  height: 40px;
  width: 1650px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  z-index: 9;
`;

export const PopoiWrapper = styled.div`
  width: 320px;
  position: relative;
`;

export const PopoiWindow = styled.div`
  bottom: 40px;
  position: absolute;
  left: 0;
  background-color: #223;
  opacity: 0.98;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -3px 30px 7px rgba(0, 0, 0, 0.35);
  border: 1px solid #334;
  border-bottom: none;
  min-width: 300px;
  min-height: 150px;
`;

export const PopoiHeader = styled.div`
  border-bottom: 1px solid #556;
  padding: 3px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PopoiContent = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const PopoiTitle = styled.div`
  flex: 1;
`;

export const PopoiActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BarItemWrapper = styled.div`
  width: 320px;
  flex: 1;
  border-right: 1px solid #556;
  display: flex;
  flex-direction: row;
  user-select: none;
  padding: 9px 10px 4px 13px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;

    .barItem-actions {
      display: block;
    }
  }
`;

export const BarItemIcon = styled.div``;

export const BarItemTitle = styled.div`
  flex: 1;
  user-select: none;
  color: #ccc;
  line-height: 22px;
`;

export const BarItemActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.div`
  display: none;
`;
export const Icon = styled.i`
  font-size: 22px;
  color: #99a;
  cursor: pointer;

  &:hover {
    color: gold;
  }
`;
