import keysDefaults from './form.keys.defaults.json';
import newBoardDefaults from './form.newBoard.defaults.json';
import settingsDefaults from './form.settings.defaults.json';
import reportIssueDefaults from './form.reportIssue.defaults.json';
import keys from './json/form.keys.json';
import newBoard from './json/form.newBoard.json';
import settings from './json/form.settings.json';
import reportIssue from './json/form.reportIssue.json';

export const forms = {
  keys,
  settings,
  newBoard,
  reportIssue,
};

export const formDefaults = {
  keys: keysDefaults,
  settings: settingsDefaults,
  newBoard: newBoardDefaults,
  reportIssue: reportIssueDefaults,
};
