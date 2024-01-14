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
    id: 'copy_board_data_to_clipboard',
    label: 'Board: Copy Data to Clipboard',
    action: {
      type: 'BOARD',
      verb: 'saveBoardData',
      destination: 'clipboard',
    },
  },
  {
    id: 'download_board_data',
    label: 'Board: Download Data',
    action: {
      type: 'BOARD',
      verb: 'saveBoardData',
      destination: 'file',
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
