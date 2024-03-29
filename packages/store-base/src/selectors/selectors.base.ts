import { get, mapValues } from 'lodash';
import { createSelector } from 'reselect';
import { sortBy } from 'shared-base';
import { FlowType, IFilterParams, IMetaParams } from '../types';
import { getCurrentWeek } from '../utils/date';
import { transformNodesToGraph } from '../utils/flows';
import { charactersMaps } from '../utils/phonetics';
import { getSpeechUrl } from '../utils/speech';
import * as raw from './selectors.raw';

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
      const { name, imageUrl, videoThumbUrl, description, tags } = boardInfo;
      const isMyBoard = id in myBoards;

      return {
        ...board,
        boardInfo: {
          ...boardInfo,
          imageUrl: `${assetsRootUrl}${imageUrl}`,
          videoThumbUrl: videoThumbUrl ? `${assetsRootUrl}${videoThumbUrl}` : '',
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

export const $projectTag = createSelector(raw.$rawCurrentIds, (currentIds) => {
  const { projectId } = currentIds;

  return projectId;
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

export const $remoteItems = createSelector(
  raw.$rawRemoteItems,
  raw.$rawCurrentIds,
  (items, currentIds) => {
    const { remoteItemId } = currentIds;
    return Object.values(items).map((item) => {
      const isSelected = item.id === remoteItemId;

      return {
        ...item,
        isSelected,
      };
    });
  }
);

export const $root = createSelector(raw.$rawSettings, raw.$rawAppState, (settings, appState) => {
  const { defaultRoot, startWithRoot } = settings;
  const { root } = appState;

  return {};
});

export const $capabilities = createSelector(
  raw.$rawAppState,
  raw.$rawCapabilities,
  (appState, capabilities) => {
    const { assetsRootUrl } = appState;

    return Object.values(capabilities).map((capability) => {
      const { imageUrl, pilar, verb } = capability;

      const meta = { pilar, verb };

      return {
        ...capability,
        imageUrl: `${assetsRootUrl}${imageUrl}`,
        meta,
        isOk: true,
      };
    });
  }
);

export const $apiProviders = createSelector(
  raw.$rawAppState,
  raw.$rawApiProviders,
  (appState, apiProviders) => {
    const { assetsRootUrl } = appState;

    return Object.values(apiProviders).map((apiProvider) => {
      const { imageUrl, models, providerType } = apiProvider;

      const modelsCount = Object.keys(models).length;

      const meta = { providerType, models: modelsCount };

      return {
        ...apiProvider,
        imageUrl: `${assetsRootUrl}${imageUrl}`,
        meta,
        isOk: true,
      };
    });
  }
);

export const $filterByWeek = createSelector(raw.$rawCurrentIds, (currentIds) => {
  const { weekId } = currentIds;

  let w = parseInt(weekId, 10);

  if (isNaN(w)) {
    w = getCurrentWeek();
  }

  const weeks = [w - 1, w + 0, w + 1, w + 2].map((id) => {
    return {
      id: id.toString(),
      name: id,
      isCurrent: id === getCurrentWeek(),
    };
  });

  return [
    {
      id: 'none',
      name: 'None',
    },
    ...weeks,
    {
      id: 'all',
      name: 'All Weeks',
    },
  ];
});

export const $filterByTier = createSelector(raw.$i, () => {
  return [
    { id: 'none', name: 'None' },
    { id: '1', name: '1' },
    { id: '2', name: '2' },
    { id: '3', name: '3' },
    { id: '4', name: '4' },
    { id: 'all', name: 'All Tiers' },
  ];
});

export const $filterByToday = createSelector(raw.$i, () => {
  return [
    { id: 'today', name: 'Today' },
    { id: 'all', name: 'All Days' },
  ];
});

export const $filterByProject = createSelector(raw.$i, () => {
  return [
    { id: 'none', name: 'None' },
    { id: 'current', name: 'Current project' },
    { id: 'all', name: 'All' },
  ];
});

export const $filterByTags = createSelector(raw.$i, () => {
  return [
    { id: 'none', name: 'None' },
    { id: 'current', name: 'Current tags' },
    { id: 'all', name: 'All' },
  ];
});

export const $filterParams = createSelector(
  raw.$rawAppState,
  raw.$rawCurrentIds,
  (appState, currentIds) => {
    const { focusProject, focusTags, focusTiers, tags } = appState;
    const { weekId, projectId, todayId, newItemId } = currentIds;

    const output: IFilterParams = {
      focusTiers,
      focusProject,
      focusTags,
      projectId,
      globalTags: tags,
      weekId,
      todayId,
      newItemId,
    };

    return output;
  }
);

export const $metaParams = createSelector(
  raw.$rawAppState,
  raw.$rawCurrentIds,
  (appState, currentIds) => {
    const { tags } = appState;
    const { projectId } = currentIds;

    const output: IMetaParams = {
      project: projectId,
      tags: tags,
    };

    return output;
  }
);

export const $metaParamsWithWeek = createSelector($metaParams, (metaParams) => {
  return {
    ...metaParams,
    week: getCurrentWeek(),
  };
});
