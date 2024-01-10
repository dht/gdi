import { Icon } from '../Icon/Icon';
import classnames from 'classnames';
import { useLocalStorage, useLocation } from 'react-use';
import { sortBy } from 'shared-base';
import { upperFirst } from 'lodash';
import { Panel } from '../Panel/Panel';
import './PhoneMenu.scss';
import {
  Content,
  GroupItem,
  GroupItems,
  GroupTitle,
  GroupWrapper,
  Header,
  Item,
  Items,
  Title,
  Wrapper,
  WrapperBadge,
} from './PhoneMenu.style';

const SLIM_LOCAL_STORAGE_KEY = 'gdi-web-ui-side-menu-slim';
const GROUP_ID_LOCAL_STORAGE_KEY = 'gdi-web-ui-side-menu-group-id';

export type PhoneMenuProps = {
  data: IMenuItem[];
  groups: string[];
  groupsTranslated: Json;
  userMenu?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
  onNavigate?: (path: string) => void;
};

export function PhoneMenu(props: PhoneMenuProps) {
  const { data, groups, groupsTranslated = {} } = props;
  const [slim, setSlim] = useLocalStorage(SLIM_LOCAL_STORAGE_KEY, true);
  const [groupId, setGroupId] = useLocalStorage(GROUP_ID_LOCAL_STORAGE_KEY, ''); // prettier-ignore
  const location = useLocation();

  const slimItems = data.filter((item) => item.showOnSlim || item.path === location.pathname);

  const currentItems = data.filter((item) => item.groupId === groupId);

  const toggleGroup = (groupId: string) => {
    setGroupId(groupId);
  };

  function onClick(item: IMenuItem) {
    const { path } = item;

    if (path === 'UP') {
      setGroupId('');
      return;
    }

    if (props.onNavigate) {
      props.onNavigate(path);
    }
  }

  function renderItem(item: IMenuItem) {
    const { icon, label, path } = item;

    const className = classnames('item', {
      selected: location.pathname === path,
    });

    return (
      <Item
        key={path}
        draggable={false}
        className={className}
        onMouseDown={() => onClick(item)}
        onTouchStart={() => onClick(item)}
      >
        <Icon className='icon' name={icon as any} />
        <Title className='title'>{label}</Title>
        <Badge value={0} />
      </Item>
    );
  }

  function renderItems(items: IMenuItem[], withHome?: boolean) {
    const home = {
      icon: 'more_horiz',
      label: 'Home',
      path: 'UP',
      badgeCount: 0,
    };

    return (
      <Items className='items'>
        {withHome && renderItem(home)}
        {items.sort(sortBy('label')).map((item) => renderItem(item))}
      </Items>
    );
  }

  function renderGroup(groupId: string, index: number) {
    const items = data.filter((item) => item.groupId === groupId).sort(sortBy('label'));

    if (items.length === 0) {
      return null;
    }

    return (
      <Group
        key={groupId}
        groupId={groupId}
        title={groupsTranslated[groupId]}
        items={items}
        onDrillDown={toggleGroup}
      />
    );
  }

  function renderGroups() {
    return groups.sort().map((group, index) => renderGroup(group, index));
  }

  function renderInner() {
    if (slim) {
      return renderItems(slimItems);
    }

    if (groupId) {
      return renderItems(currentItems, true);
    }

    return renderGroups();
  }

  const className = classnames('PhoneMenu-wrapper', {
    slim,
  });

  const groupIdUppercase = upperFirst(groupId ?? '');

  const title = slim ? '' : groupIdUppercase || 'Home';

  return (
    <Panel title={title} onClose={() => {}} id='Apps' transparent={true}>
      <Wrapper className={className}>
        <Content className='content'>{renderInner()}</Content>
        {props.userMenu}
        {props.children}
        <Header className='header'>
          <Icon className='cancel' name='chevron_right' onClick={() => setSlim(!slim)} />
        </Header>
      </Wrapper>
    </Panel>
  );
}

export type GroupProps = {
  groupId: string;
  title: string;
  items: IMenuItem[];
  onDrillDown: (groupId: string) => void;
};

export function Group(props: GroupProps) {
  const { groupId, title, items } = props;

  function renderItem(item: IMenuItem) {
    const { icon, path } = item;

    const className = classnames('groupItem', {
      selected: location.pathname === path,
    });

    return (
      <GroupItem className={className} key={item.label}>
        <Icon className='icon' name={icon as any} />
      </GroupItem>
    );
  }

  function renderItems() {
    return items.filter((_i, index) => index < 9).map((item) => renderItem(item));
  }

  return (
    <GroupWrapper
      key={groupId}
      draggable={false}
      onMouseDown={() => props.onDrillDown(groupId)}
      onTouchStart={() => props.onDrillDown(groupId)}
    >
      <GroupItems className='groupItems'>{renderItems()}</GroupItems>
      <GroupTitle className='title'>{title}</GroupTitle>
    </GroupWrapper>
  );
}

export type BadgeProps = {
  value?: number;
};

function Badge(props: BadgeProps) {
  const { value = 0 } = props;

  if (value === 0) {
    return null;
  }

  const valueText = value > 99 ? '99+' : value;

  return <WrapperBadge className='badge'>{valueText}</WrapperBadge>;
}

export default PhoneMenu;
