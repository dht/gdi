import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #333;
  color: #fff;
  font-size: 14px;
  padding: 20px;
  position: relative;
`;

export const LayerAvatar = styled.div`
  width: 130px;
  height: 150px;
  background-size: 260px 300px;
  background-position: top right;
  background-image: url(/boards/B-010/assets/wh3.png);
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AvatarDetails = styled.div`
  padding: 20px;
`;

export const AvatarName = styled.div`
  font-size: 20px;
`;

export const AvatarExpertise = styled.div`
  color: gold;
  margin-top: 4px;
`;

export const AvatarDescription = styled.div`
  width: 200px;
  margin-top: 8px;
  font-size: 13px;
  opacity: 0.4;
  line-height: 1.3;
  max-height: 200px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Actions = styled.div`
  margin-top: 10px;
`;

export const Cta = styled(Button)``;

export const Score = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;
