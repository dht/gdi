import { Wrapper } from './Typography.style';
import classnames from 'classnames';

export type TypographyProps = {
  children?: React.ReactNode;
  variant?: string;
};

export function Typography(props: TypographyProps) {
  const { variant } = props;
  const className = classnames('Typography-wrapper', variant, {});

  return (
    <Wrapper className={className} data-testid='Typography-wrapper'>
      {props.children}
    </Wrapper>
  );
}

export default Typography;
