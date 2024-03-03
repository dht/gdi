import { UserMenu } from '@gdi/ui';
import { useContext } from 'react';
import { LoginContext } from '@gdi/firebase';
import { useNavigate } from 'react-router-dom';

export type UserMenuContainerProps = {};

export function UserMenuContainer(props: UserMenuContainerProps) {
  const { state } = useContext(LoginContext);
  const { status, initials, displayPhoto, isAnonymous } = state;

  const badge = '';

  const navigate = useNavigate();

  function onClick(item: Json) {
    const { path } = item;
    navigate(path);
  }

  return (
    <UserMenu
      status={status}
      initials={initials}
      imageUrl={displayPhoto}
      badge={badge}
      isAnonymous={isAnonymous}
      onClick={onClick}
      darkMode
    />
  );
}

export default UserMenuContainer;
