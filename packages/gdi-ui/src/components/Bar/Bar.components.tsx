import classnames from 'classnames';
import { IBarItem } from '../../types';
import { Emoji, Item, Modifier } from './Bar.style';
import { useTime } from '../../hooks/useTime';
import { useShortKey } from '../../hooks/useShortKey';

export type BarItemProps = {
  barItem: IBarItem;
  onClick: (barItem: IBarItem) => void;
  is24Hours: boolean;
};

export function BarItem(props: BarItemProps) {
  const { barItem, is24Hours } = props;
  let { value = '', emoji, modifier, addClassName, shortKey } = barItem;

  useShortKey(shortKey, () => {
    props.onClick(barItem);
  });

  const currentTime = useTime(is24Hours);

  if (value.includes('$time')) {
    value = value.replace('$time', currentTime);
  }

  const className = classnames('barItem', {
    [value]: addClassName,
  });

  return (
    <Item key={barItem.id} className={className} onClick={() => props.onClick(barItem)}>
      {modifier && <Modifier>{modifier}</Modifier>}
      {emoji && <Emoji>{emoji}</Emoji>}
      {value}
    </Item>
  );
}

export default BarItem;
