import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: 1px solid #ccc;
  min-height: 75px;
  display: flex;
  font-size: 14px;
  position: sticky;
  transition: height 0.25s cubic-bezier(0.2, 0, 0, 1);
  top: 0;
  background-color: white;
  z-index: 4999;

  @media (max-width: 800px) {
    min-height: 65px;
  }

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Slogan = styled.div`
  width: 120px;
  opacity: 0.4;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Actions = styled.div`
  margin-right: 20px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Github = styled.a`
  width: 20px;
  height: 20px;
  background-image: url(/github-mark.svg);
  background-size: 100% 100%;
  margin-right: 10px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;
