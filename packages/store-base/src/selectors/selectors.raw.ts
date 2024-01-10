import { createSelector } from 'reselect';
import { IBoard, IGdiStore } from '../types';

export const $i = (state: IGdiStore) => state;
export const $n = (): null => null;
export const $o = (): void => {};

export const $rawAppState = createSelector($i, (state: IGdiStore) =>state.appState); // prettier-ignore
export const $rawCurrentIds = createSelector($i, (state: IGdiStore) => state.currentIds); // prettier-ignore
export const $rawBoard = createSelector($i, (state: IGdiStore) => state.board as IBoard); // prettier-ignore
export const $rawBoards = createSelector($i, (state: IGdiStore) => state.boards); // prettier-ignore
export const $rawAssistants = createSelector($i, (state: IGdiStore) =>state.assistants); // prettier-ignore
export const $rawMyBoards = createSelector($i, (state: IGdiStore) => state.myBoards); // prettier-ignore
export const $rawBarItems = createSelector($i, (state: IGdiStore) =>state.barItems); // prettier-ignore
export const $rawBoardInfo = createSelector($i, (state: IGdiStore) => state.board.boardInfo); // prettier-ignore
export const $rawPlaybackState = createSelector($i, (state: IGdiStore) => state.playbackState); // prettier-ignore
export const $rawTranscriptLines = createSelector($i, (state: IGdiStore) => state.transcriptLines); // prettier-ignore
export const $rawTranscriptAudios = createSelector($i, (state: IGdiStore) => state.transcriptAudios); // prettier-ignore
export const $rawLogs = createSelector($i, (state: IGdiStore) => state.logs); // prettier-ignore
export const $rawMessages = createSelector($i, (state: IGdiStore) => state.messages); // prettier-ignore
export const $rawFlowNodes = createSelector($i, (state: IGdiStore) => state.flowNodes); // prettier-ignore
export const $rawFlowConfig = createSelector($i, (state: IGdiStore) => state.flowConfig); // prettier-ignore
export const $rawFlowAssistants = createSelector($i, (state: IGdiStore) => state.flowAssistants); // prettier-ignore
export const $rawFlowApis = createSelector($i, (state: IGdiStore) => state.flowApis); // prettier-ignore
export const $rawFlowState = createSelector($i, (state: IGdiStore) => state.flowState); // prettier-ignore
export const $rawUser = createSelector($i, (state: IGdiStore) => state.user); // prettier-ignore
export const $rawSettings = createSelector($i, (state: IGdiStore) => state.settings); // prettier-ignore
export const $rawTags = createSelector($i, (state: IGdiStore) => state.tags); // prettier-ignore
export const $rawAssets = createSelector($i, (state: IGdiStore) => state.assets); // prettier-ignore
export const $rawAdapters = createSelector($i, (state: IGdiStore) => state.adapters); // prettier-ignore
export const $rawDocument = createSelector($i, (state: IGdiStore) => state.document); // prettier-ignore
export const $rawDocumentSuggestions = createSelector($i, (state: IGdiStore) => state.documentSuggestions); // prettier-ignore
export const $rawSagas = createSelector($i, (state: IGdiStore) => state.sagas); // prettier-ignore
export const $rawVoices = createSelector($i, (state: IGdiStore) => state.voices); // prettier-ignore

// transient
export const $rawTodos = createSelector($i, (state: IGdiStore) =>state.todos); // prettier-ignore
