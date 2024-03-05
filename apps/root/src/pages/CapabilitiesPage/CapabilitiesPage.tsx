import { ICapability } from '@gdi/store-base';
import { ItemLine } from '@gdi/ui';
import { Wrapper } from './CapabilitiesPage.style';

export type CapabilitiesPageProps = {
  capabilities: ICapability[];
};

export function CapabilitiesPage(props: CapabilitiesPageProps) {
  const { capabilities } = props;

  function renderCapability(capability: ICapability) {
    return <ItemLine key={capability.id} item={capability} />;
  }

  function renderCapabilities() {
    return capabilities.map((capability: ICapability) =>
      renderCapability(capability)
    );
  }

  return (
    <Wrapper
      className='CapabilitiesPage-wrapper'
      data-testid='CapabilitiesPage-wrapper'
    >
      {renderCapabilities()}
    </Wrapper>
  );
}

export default CapabilitiesPage;
