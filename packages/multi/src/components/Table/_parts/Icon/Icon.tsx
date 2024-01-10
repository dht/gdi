import { Wrapper } from './Icon.style';
import { icons } from './icons';

export type IconProps = {
  icon: 'brush' | 'close' | 'edit' | 'list' | 'download' | 'info' | 'notes';
  size?: number;
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
};

export function Icon(props: IconProps) {
  const { icon, size = 20 } = props;
  const Cmp = icons[icon];

  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <Wrapper
      className='Icon-wrapper'
      data-testid='Icon-wrapper'
      onClick={props.onClick}
      style={style}
    >
      <Cmp />
    </Wrapper>
  );
}

export default Icon;
