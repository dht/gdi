import React from 'react';
import { Badge, Wrapper } from './ApiKeys.style';
import classnames from 'classnames';

export type ApiKeysProps = {
  isApiKeyOk: null | boolean;
  onClick: () => void;
};

export function ApiKeys(props: ApiKeysProps) {
  const { isApiKeyOk } = props;

  function renderIcon() {
    if (isApiKeyOk === null) {
      return null;
    }

    const className = classnames({
      ok: isApiKeyOk,
      warning: !isApiKeyOk,
    });

    const iconName = isApiKeyOk ? 'done' : 'priority_high';

    return (
      <Badge className={className}>
        <span className='material-symbols-outlined'>{iconName}</span>
      </Badge>
    );
  }

  return (
    <Wrapper className='ApiKeys-wrapper' data-testid='ApiKeys-wrapper' onClick={props.onClick}>
      API Keys
      {renderIcon()}
    </Wrapper>
  );
}

export default ApiKeys;
