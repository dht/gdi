import React from 'react';
import { Id, Key, Row, Value, Wrapper } from './ParamsTable.style';
import classnames from 'classnames';

export type ParamsTableProps = {
  label: string;
  value: Json;
  wide?: boolean;
  filterKeys?: string[];
  onClick: () => void;
  onKeyClick: (fieldId: string) => void;
  onValueClick: (fieldId: string, value: string) => void;
};

export const ParamsTable = React.forwardRef((props: ParamsTableProps, ref: any) => {
  const { label = '', value = {}, wide, filterKeys } = props;

  function renderKey(key: string) {
    const data = value[key];

    const style: React.CSSProperties = {};

    if (data === '') {
      return null;
    }

    if (filterKeys && !filterKeys.includes(key)) {
      return null;
    }

    return (
      <Row key={key} className='pair'>
        <Key className='key' style={style} onClick={() => props.onKeyClick(key)}>
          {wide ? key : key.substring(0, 3)}:
        </Key>
        <Value className='value' onClick={() => props.onValueClick(key, data)}>
          {data}
        </Value>
      </Row>
    );
  }

  function renderKeys() {
    return Object.keys(value)
      .filter((key) => !['id', 'label'].includes(key))
      .map((key: string) => renderKey(key));
  }

  const className = classnames('ParamsTable-wrapper', {
    wide,
  });

  return (
    <Wrapper className={className} data-testid='ParamsTable-wrapper'>
      <Id onClick={props.onClick}>{label}</Id>
      {renderKeys()}
    </Wrapper>
  );
});

export default ParamsTable;
