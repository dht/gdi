import { memo } from 'react';
import { CustomNode as CustomNodeApi } from './node.Api';
import { CustomNode as CustomNodeOutput } from './node.Output';
import { CustomNode as CustomNodePrompt } from './node.Prompt';

export const nodeTypes = {
  customApi: memo(CustomNodeApi),
  customInput: memo(CustomNodePrompt),
  customOutput: memo(CustomNodeOutput),
  customPrompt: memo(CustomNodePrompt),
  customDefault: memo(CustomNodeApi),
};
