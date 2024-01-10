import classnames from 'classnames';
import { Wrapper } from './Shape.style';

export type ShapeProps = {
  shape: string;
};

export function Shape(props: ShapeProps) {
  const { shape } = props;

  const className = classnames('Shape-wrapper', shape, {});

  return <Wrapper className={className} data-testid='Shape-wrapper'></Wrapper>;
}

export default Shape;
