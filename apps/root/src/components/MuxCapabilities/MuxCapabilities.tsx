import { ICapability } from '@gdi/store-base';
import { ItemLine } from '@gdi/ui';
import { Wrapper } from './MuxCapabilities.style';

export type MuxCapabilitiesProps = {
  capabilities: ICapability[];
};

export function MuxCapabilities(props: MuxCapabilitiesProps) {
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
      className='MuxCapabilities-wrapper'
      data-testid='MuxCapabilities-wrapper'
    >
      {renderCapabilities()}
    </Wrapper>
  );
}

export default MuxCapabilities;
