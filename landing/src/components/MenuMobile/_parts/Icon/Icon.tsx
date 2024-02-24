import classnames from 'classnames';
import { Wrapper } from './Icon.style';

export type IconProps = {
  name: string;
  size?: number;
  color?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  button?: boolean;
  off?: boolean;
  disabled?: boolean;
};

export function Icon(props: IconProps) {
  const { name, size, color, button, off, disabled } = props;

  const className = classnames('Icon-wrapper', props.className, {
    clickable: props.onClick,
    ['material-symbols-outlined']: true,
    btn: button,
    off,
    disabled,
  });

  const style: React.CSSProperties = {
    width: size,
    height: size,
    color,
    fontSize: size + 'px',
  };

  return (
    <Wrapper className={className} style={style} data-testid='Icon-wrapper' onClick={props.onClick}>
      {name}
    </Wrapper>
  );
}

export default Icon;
