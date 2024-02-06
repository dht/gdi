import styled from 'styled-components';
import { menuItems } from './VisionHome.data';
import Icon from '../../../Icon/Icon';

export const HomeIcon = (props: any) => {
  const { value } = props;
  const { id, name, iconUrl, isGap } = value;

  if (isGap) {
    return <Gap />;
  }

  const style: React.CSSProperties = {
    backgroundImage: `url(${iconUrl})`,
  };

  return (
    <IconWrapper onClick={props.onClick}>
      <IconImage style={style} />
      <IconText>{name}</IconText>
    </IconWrapper>
  );
};

export const LeftMenu = (props: any) => {
  function renderItem(item: Json) {
    const { iconName } = item;

    return (
      <MenuItem key={item.id} className='item'>
        <Icon name={iconName} color='white' size={30} />
      </MenuItem>
    );
  }

  function renderItems() {
    return menuItems.map((item: Json) => renderItem(item));
  }

  return <MenuWrapper>{renderItems()}</MenuWrapper>;
};

export const Gap = styled.div`
  width: 18px;
  margin: 30px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 16px calc(115px * 80 / 130 / 2);
  width: 80px;
`;

export const MenuWrapper = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: -70px;
  padding: 10px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.2);
`;

export const MenuItem = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:first-child {
    background-color: rgba(255, 255, 255, 0.2);
    margin-bottom: 5px;
  }
`;

export const IconImage = styled.div`
  width: 80px;
  height: 80px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const IconText = styled.div`
  font-size: 12px;
  margin-top: 12px;
  white-space: nowrap;
`;
