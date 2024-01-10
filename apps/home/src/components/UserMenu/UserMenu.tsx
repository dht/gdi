import { Avatar, Icon, Menu } from '@gdi/ui';
import classnames from 'classnames';
import React, { useMemo, useState } from 'react';
import { itemsAnonymous, itemsUser } from './UserMenu.data';
import { Wrapper } from './UserMenu.style';

export type UserMenuProps = {
  status: string;
  initials: string;
  imageUrl: string;
  badge: string;
  isAnonymous: boolean;
  onClick: (item: Json) => void;
};

export function UserMenu(props: UserMenuProps) {
  const { status, initials, imageUrl, badge, isAnonymous } = props;
  const [target, setTarget] = useState<HTMLElement>();

  const menuItems = useMemo(() => {
    return isAnonymous ? itemsAnonymous : itemsUser;
  }, [isAnonymous]);

  function onWrapperClick(event: React.MouseEvent<HTMLElement>) {
    setTarget(event.currentTarget);
  }

  function onItemClick(item: Json) {
    setTarget(undefined);
    props.onClick(item);
  }

  const className = classnames('UserMenu-wrapper', status, {});

  return (
    <Wrapper
      className={className}
      data-testid='UserMenu-wrapper'
      onClick={onWrapperClick}
    >
      <Icon name='Menu2' size={20} />
      <Avatar
        isAnonymous={isAnonymous}
        initials={initials}
        imageUrl={imageUrl}
        badge={badge}
        randomColor={true}
      />
      {target && (
        <Menu
          items={menuItems}
          target={target}
          onClick={onItemClick}
          onCancel={() => setTarget(undefined)}
        />
      )}
    </Wrapper>
  );
}

export default UserMenu;
