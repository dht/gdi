import React from 'react';
import { Badge, Inner, Wrapper } from './Avatar.style';
import Icon from '../Icon/Icon';
import { randomLinearGradient } from './Avatar.utils';

export type AvatarProps = {
  badge: number;
  isAnonymous: boolean;
  initials: string;
  imageUrl: string;
  randomColor?: boolean;
};

export function Avatar(props: AvatarProps) {
  const { initials, isAnonymous, imageUrl, badge, randomColor } = props;

  const style: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
  };

  if (randomColor) {
    style.backgroundImage = randomLinearGradient();
  }

  function renderInner() {
    if (isAnonymous) {
      return <Icon name='User' size={20} />;
    }

    if (imageUrl) {
      return null;
    }

    return initials;
  }

  function renderBadge() {
    if (!badge || isAnonymous) {
      return null;
    }

    return <Badge>{badge}</Badge>;
  }

  return (
    <Wrapper className='Avatar-wrapper' data-testid='Avatar-wrapper'>
      <Inner style={style}>{renderInner()}</Inner>
      {renderBadge()}
    </Wrapper>
  );
}

export default Avatar;
