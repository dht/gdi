import { createSelector } from 'reselect';
import { transformNodesToGraph } from '../utils/flows';
import { charactersMaps } from '../utils/phonetics';
import { getSpeechUrl } from '../utils/speech';
import * as raw from './selectors.raw';
import { FlowType, Json } from '../types';
import { sortBy } from 'shared-base';
import { get, mapValues } from 'lodash';

export const $logs = createSelector(raw.$rawLogs, (logs) => {
  return Object.values(logs).sort(sortBy('timestamp'));
});

export const $sourceUrl = createSelector(raw.$rawBoard, (board) => {
  return board.sourceUrl;
});

export const $playbackInfo = createSelector(
  raw.$rawAppState,
  raw.$rawPlaybackState,
  (appState, playbackState) => {
    return {
      prompt: appState.prompt,
      flavour: appState.flavour,
      ...playbackState,
    };
  }
);

export const $transcript = createSelector(
  raw.$rawTranscriptLines,
  raw.$rawTranscriptAudios,
  raw.$rawAppState,
  (lines, audios, appState) => {
    const { isEmulator } = appState;

    return Object.values(lines).map((line) => {
      const { id, text = '' } = line;

      const audio = audios[id];
      let audioUrl = audio?.audioUrl ?? '';

      if (isEmulator) {
        audioUrl = audioUrl.replace('https://storage.googleapis.com/', 'http://localhost:9199/');
      }

      return {
        ...line,
        audioUrl,
        text: text.trim().replace(/^"/, '').replace(/"$/, ''),
      };
    });
  }
);

export const $transcriptForAnimation = createSelector(
  raw.$rawAppState,
  $transcript,
  (appState, sentences) => {
    const { transcriptId, storageUrl = '' } = appState;

    return sentences
      .map((sentence: any, index: number) => {
        const { id: sentenceId, speakerName, audioUrl, textPhonetics } = sentence;

        const character = charactersMaps[speakerName];

        if (!character) {
          return;
        }

        const characterId = character.id;
        const isBack = character.isBack;

        return {
          id: `${transcriptId}-${sentenceId}`,
          audioUrl: audioUrl ?? getSpeechUrl(storageUrl, transcriptId!, index + 1),
          characterId,
          isBack,
          sentence: textPhonetics,
        };
      })
      .filter((i) => i);
  }
);

export const $transcriptCurrentIndex = createSelector(raw.$rawAppState, (appState) => {
  const { lineIndex } = appState;
  return lineIndex;
});

export const $barItemsVariables = createSelector(raw.$rawBoard, (board) => {});

export const $messages = createSelector(raw.$rawMessages, (messages) => {
  return Object.values(messages).sort(sortBy('timestamp'));
});

export const $flowNodes = createSelector(
  raw.$rawFlowNodes,
  raw.$rawFlowAssistants,
  raw.$rawFlowApis,
  (nodes, assistants, apis) => {
    return mapValues(nodes, (node) => {
      const { assistantId, apiId, status } = node;

      const assistant = get(assistants, assistantId ?? '');
      const api = get(apis, apiId ?? '');

      return {
        ...node,
        assistant,
        api,
        isRunning: status === 'running',
      };
    });
  }
);

export const $flow = createSelector(
  raw.$rawFlowConfig,
  raw.$rawFlowApis,
  raw.$rawFlowAssistants,
  raw.$rawFlowNodes,
  (flowConfig, flowApis, flowAssistants, flowNodes) => {
    return {
      flowConfig,
      flowApis,
      flowAssistants,
      flowNodes,
    };
  }
);

export const $flowVisual = createSelector($flowNodes, (nodes) => {
  return transformNodesToGraph(nodes);
});

export const $flowType = createSelector($flow, (flow) => {
  return get(flow, 'flowConfig.flowType') as FlowType;
});

export const $isGuest = createSelector(raw.$rawAppState, raw.$rawUser, (appState, user) => {
  if (!appState.isAuthenticated) {
    return null;
  }

  return user.isAnonymous;
});

export const $boards = createSelector(
  raw.$rawAppState,
  raw.$rawBoards,
  raw.$rawMyBoards,
  (appState, boards, myBoards) => {
    const { assetsRootUrl } = appState;

    return Object.values(boards).map((board) => {
      const { id, boardInfo } = board;
      const { name, imageUrl, description, tags } = boardInfo;
      const isMyBoard = id in myBoards;

      return {
        ...board,
        boardInfo: {
          ...boardInfo,
          imageUrl: `${assetsRootUrl}${imageUrl}`,
        },
        name,
        description,
        tags,
        isMyBoard,
      };
    });
  }
);

export const $myBoards = createSelector($boards, (boards) => {
  return boards.filter((board) => board.isMyBoard);
});

export const $isApiKeyOk = createSelector(raw.$rawAppState, (appState) => {
  return appState.isApiKeyOk;
});

export const $isAuthenticated = createSelector(raw.$rawUser, (user) => {
  return user.uid;
});

export const $asset = createSelector(raw.$rawAssets, raw.$rawCurrentIds, (assets, currentIds) => {
  const { assetId } = currentIds;
  return assets[assetId];
});

export const $documentStats = createSelector(raw.$rawDocument, (document) => {
  const { content } = document;

  const wordsCount = content.split(' ').length;
  const charactersCount = content.length;
  const linesCount = content.split('\n').length;

  return {
    words: wordsCount,
    characters: charactersCount,
    lines: linesCount,
  };
});

export const $projectTag = createSelector(raw.$rawAppState, (appState) => {
  const { tags = [] } = appState;
  const projectTag = tags.find((tag: string) => tag.startsWith('project-'));

  return projectTag;
});

export const $sagas = createSelector(raw.$rawSagas, (sagas) => {
  return Object.values(sagas)
    .filter((saga) => saga.isRunning)
    .sort(sortBy('id'))
    .map((saga, index) => ({
      index: index + 1,
      ...saga,
    }));
});

export const $voices = createSelector(raw.$rawAppState, raw.$rawVoices, (appState, voices) => {
  const { assetsRootUrl } = appState;

  return Object.values(voices).map((voice) => {
    const { imageUrl, audioUrl } = voice;

    return {
      ...voice,
      imageUrl: `${assetsRootUrl}${imageUrl}`,
      audioUrl: `${assetsRootUrl}${audioUrl}`,
    };
  });
});

export const $isPreview = createSelector($isGuest, $projectTag, (isGuest, projectTag) => {
  return isGuest || projectTag === 'project-tutorial';
});

export const $isRemoteData = createSelector(raw.$rawAppState, (appState) => {
  const { boardDbPath } = appState;

  return boardDbPath !== '';
});
