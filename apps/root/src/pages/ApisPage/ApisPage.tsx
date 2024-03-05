import { IApiProvider } from '@gdi/store-base';
import { ItemLine } from '@gdi/ui';
import { Wrapper } from './ApisPage.style';

export type ApisPageProps = {
  apiProviders: IApiProvider[];
};

export function ApisPage(props: ApisPageProps) {
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
    <Wrapper className='ApisPage-wrapper' data-testid='ApisPage-wrapper'>
      {renderApiProviders()}
    </Wrapper>
  );
}

export default ApisPage;
