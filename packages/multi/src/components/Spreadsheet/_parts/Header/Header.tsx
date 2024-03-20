import React from 'react';
import { Wrapper } from './Header.style';
import { ITableField } from '../../../../types';

export type HeaderProps = {
  field: ITableField;
  style?: React.CSSProperties;
};

export function Header(props: HeaderProps) {
  const { field, style } = props;
  const { title } = field;

  return (
    <Wrapper style={style} className='field'>
      {title}
    </Wrapper>
  );
}

export default Header;
