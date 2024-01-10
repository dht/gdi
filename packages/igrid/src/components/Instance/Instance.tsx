import classnames from 'classnames';
import { useContext } from 'react';
import type { IElement } from '../../grid.types';
import { areaDimension } from '../../utils/cssGrid';
import { GridContext } from '../Grid/Grid.context';
import { Wrapper } from './Instance.style';

export type InstanceProps = {
  element: IElement;
};

export function Instance(props: InstanceProps) {
  const { element } = props;
  const { position, dimension, flags = {}, columnIndex } = element;
  const { callbacks } = useContext(GridContext);

  if (!position || !dimension) {
    return null;
  }

  const className = classnames('Instance-wrapper', {
    overflow: flags.allowOverflow,
    noHeader: flags.hideHeader,
    floating: flags.isFloating,
    fullPage: flags.isFullPage,
    hidden: flags.isHidden,
    transparent: flags.isTransparent,
  });

  const style: React.CSSProperties = {
    gridArea: areaDimension(position.y, position.x, dimension.y, dimension.x),
  };

  return (
    <Wrapper className={className} style={style}>
      {callbacks.renderElement(element)}
    </Wrapper>
  );
}

export default Instance;
