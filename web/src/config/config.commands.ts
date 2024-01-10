import type { ICommandPaletteItems } from '@gdi/ui';

export const commandPaletteItems: ICommandPaletteItems = [
  {
    id: 'board_definitions_open',
    label: 'Board: Open Board Definition',
    action: {
      type: 'BOARD',
      verb: 'openBoardDefinition',
    },
  },
  {
    id: 'board_load_from_url',
    label: 'Board: Load from URL',
    action: {
      type: 'BOARD',
      verb: 'loadFromUrl',
    },
  },
  {
    id: 'configure_adapter',
    label: 'Configure Prompt Adapter',
    action: {
      type: 'BOARD',
      verb: 'promptAdapter',
    },
  },
  {
    id: 'board_setups',
    label: 'Board: List Playbacks',
    action: {
      type: 'BOARD',
      verb: 'listSetups',
    },
  },
  {
    id: 'board_intro',
    label: 'Board: Show Intro',
    action: {
      type: 'BOARD',
      verb: 'showIntro',
    },
  },
  {
    id: 'navigate_to_board_gallery',
    label: 'Navigate: To Board Gallery',
    action: {
      type: 'NAVIGATE',
      to: '/',
    },
  },
  {
    id: 'board_export',
    label: 'Board: Full Export',
    action: {
      type: 'BOARD',
      verb: 'fullExport',
    },
  },
  {
    id: 'show_keyboard_shortcuts',
    label: 'Show Keyboard Shortcuts',
    shortKeys: [
      {
        key: '?',
        withCtrl: true,
      },
    ],
  },
  {
    id: 'show_logs',
    label: 'Show logs',
    shortKeys: [
      {
        key: '`',
      },
    ],
  },
  {
    id: 'show_build',
    label: 'Show build information',
    action: {
      type: 'INFO',
      verb: 'showBuild',
    },
  },
];
