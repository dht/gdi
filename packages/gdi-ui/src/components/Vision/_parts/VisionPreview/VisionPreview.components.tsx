import React from 'react';
import VisionBar from '../VisionBar/VisionBar';
import { actions } from './VisionPreview.bar';
import Icon from '../../../Icon/Icon';
import styled from 'styled-components';

export function VisionFilename(props: any) {
  const { appIconUrl, value } = props;

  return (
    <Wrapper className='VisionPreview-wrapper' data-testid='VisionPreview-wrapper'>
      <AppIcon $url={appIconUrl} />
      <Title>{value}</Title>
      <Icon size={15} color='#bbb' name='arrow_forward_ios' />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  position: absolute;
  top: -72px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  padding: 10px;
  color: white;
  backdrop-filter: blur(10px);
  background-color: rgba(70, 66, 57, 0.95);
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AppIcon = styled.div<{ $url: string }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-image: url(${(props) => props.$url});
  background-size: cover;
`;

export const Title = styled.div`
  font-size: 15px;
  letter-spacing: 1px;
  flex: 1;
  text-align: center;
`;
