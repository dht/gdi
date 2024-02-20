import { IShortKey } from '@gdi/ui';

export const globalShortKeys: IShortKey[] = [
  {
    id: 'toggleCommandPalette',
    key: 'k',
    withCommand: true,
    description: 'Toggle Command Palette',
  },
  {
    id: 'toggleRoot',
    key: '`',
    description: 'Toggle Root',
  },
  {
    id: 'showShortKeys',
    key: '?',
    withShift: true,
    withCtrl: true,
    description: 'Show Short Keys',
  },
  {
    id: 'focusOnPrompt',
    key: 'Enter',
    withCommand: true,
    description: 'Focus on Prompt',
  },
];
