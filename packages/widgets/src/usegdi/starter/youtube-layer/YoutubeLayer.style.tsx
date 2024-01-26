import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #111;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const Sentence = styled.div`
  height: 100px;
  background-color: rgba(255, 255, 255, 0.05);
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.div`
  color: white;
  font-style: italic;
  font-size: 20px;
  flex: 1;
  text-align: center;
`;

export const Analysis = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Column = styled.div`
  flex: 1;
  padding: 20px;
  max-height: 640px;
  overflow: auto;

  &:first-child {
    max-width: 140px;
    background-color: #000;
  }
`;

export const FallacyImage = styled.div`
  width: 140px;
  height: 150px;
  margin: 10px auto;
  background-image: url(/boards/assets/strawman.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FallacyTitle = styled.div``;

export const FallacyDescription = styled.div``;

export const Links = styled.div``;

export const Link = styled.a`
  display: block;
  padding: 5px 5px;
  border-bottom: 1px solid #334;
  font-size: 14px;
  color: #aab;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
