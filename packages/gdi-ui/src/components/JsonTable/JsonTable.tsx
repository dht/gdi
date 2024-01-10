import React from 'react';
import { Key, Row, Value, Wrapper } from './JsonTable.style';

export type JsonTableProps = {
  value: Json;
  labelWidth?: number;
};

export const JsonTable = React.forwardRef((props: JsonTableProps, ref: any) => {
  const { value = {}, labelWidth = 120 } = props;

  function renderKey(key: string) {
    const data = value[key];

    const style: React.CSSProperties = {
      minWidth: labelWidth + 'px',
    };

    return (
      <Row key={key} className='pair'>
        <Key className='key' style={style}>
          {key}:
        </Key>
        <Value className='value'>{data}</Value>
      </Row>
    );
  }

  function renderKeys() {
    return Object.keys(value).map((key: string) => renderKey(key));
  }

  return (
    <Wrapper className='JsonTable-wrapper' data-testid='JsonTable-wrapper'>
      {renderKeys()}
    </Wrapper>
  );
});

export default JsonTable;
