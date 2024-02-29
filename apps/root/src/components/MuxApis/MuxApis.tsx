import React from 'react';
import { Wrapper } from './MuxApis.style';
import { IApiProvider } from '@gdi/store-base';
import { ItemLine } from '@gdi/ui';

export type MuxApisProps = {
  apiProviders: IApiProvider[];
};

export function MuxApis(props: MuxApisProps) {
  const { apiProviders } = props;

  function renderApiProvider(apiProvider: IApiProvider) {
    return (
      <ItemLine
        key={apiProvider.id}
        className='apiProvider'
        item={apiProvider}
      />
    );
  }

  function renderApiProviders() {
    return apiProviders.map((apiProvider: IApiProvider) =>
      renderApiProvider(apiProvider)
    );
  }

  return (
    <Wrapper className='MuxApis-wrapper' data-testid='MuxApis-wrapper'>
      {renderApiProviders()}
    </Wrapper>
  );
}

export default MuxApis;
