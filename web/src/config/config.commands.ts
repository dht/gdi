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
    id: 'board_intro',
    label: 'Board: Show Intro',
    action: {
      type: 'BOARD',
      verb: 'showIntroModal',
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
    id: 'show_logs',
    label: 'Show logs',
    action: {
      type: 'PATCH_APPSTATE',
      payload: {
        showLog: true,
      },
    },
  },
];
