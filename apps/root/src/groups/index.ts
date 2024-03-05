import { AccountGroupContainer } from './AccountGroup.container';
import { AssetsGroupContainer } from './AssetsGroup.container';
import { CapabilitiesGroupContainer } from './CapabilitiesGroup.container';
import { FlowsGroupContainer } from './FlowsGroup.container';
import { MuxGroupContainer } from './MuxGroup/MuxGroup.container';

export const groups = {
  account: AccountGroupContainer,
  assets: AssetsGroupContainer,
  capabilities: CapabilitiesGroupContainer,
  mux: MuxGroupContainer,
  flows: FlowsGroupContainer,
};
