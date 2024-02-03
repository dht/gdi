import { ISagas } from './types';

export const sagas: ISagas = {
  'gdi.api': {
    id: 'gdi.api',
    type: 'api',
    trigger: {},
  },
  'gdi.assets': {
    id: 'gdi.assets',
    type: 'entity',
    trigger: {
      actionTypes: ['ASSET'],
    },
  },
  'gdi.bar': {
    id: 'gdi.bar',
    type: 'entity',
    trigger: {
      actionTypes: ['BAR'],
    },
  },
  'gdi.board': {
    id: 'gdi.board',
    type: 'entity',
    trigger: {
      actionTypes: ['BOARD'],
    },
  },
  'gdi.gdi': {
    id: 'gdi.gdi',
    type: 'bootstrap',
    trigger: {},
  },
  'gdi.logs': {
    id: 'gdi.logs',
    type: 'customEvent',
    trigger: {
      eventNames: ['gdi/log'],
    },
  },
  'gdi.onboarding': {
    id: 'gdi.onboarding',
    type: 'bootstrap',
    trigger: {},
  },
  'gdi.keys': {
    id: 'gdi.keys',
    type: 'keys',
    trigger: {},
  },
  'gdi.navigation': {
    id: 'gdi.navigation',
    type: 'customEvent',
    trigger: {
      actionTypes: ['NAVIGATE'],
      eventNames: ['nav'],
    },
  },
  'gdi.errors': {
    id: 'gdi.errors',
    type: 'customEvent',
    trigger: {
      eventNames: ['function/error'],
    },
  },
  'gdi.prompt': {
    id: 'gdi.prompt',
    type: 'customEvent',
    trigger: {
      actionTypes: ['PROMPT', 'BOOTSTRAP_FLOW', 'FLOW_CHANGES_ASSISTANT'],
      eventNames: ['flow/completed'],
    },
  },
  'gdi.transcript': {
    id: 'gdi.transcript',
    type: 'component',
    trigger: {
      actionTypes: ['TRANSCRIPT_PROMPT'],
    },
  },
  'gdi.tags': {
    id: 'gdi.tags',
    type: 'bootstrap',
    trigger: {},
  },
  'boards.api': {
    id: 'boards.api',
    type: 'api',
  },
  'home.api': {
    id: 'home.api',
    type: 'api',
  },
  'home.keys': {
    id: 'home.keys',
    type: 'customEvent',
    trigger: {
      eventNames: ['saveKeys'],
    },
  },
  'home.home': {
    id: 'home.home',
    type: 'entity',
    trigger: {
      actionTypes: ['HOME'],
    },
  },
  'home.newBoard': {
    id: 'home.newBoard',
    type: 'customEvent',
    trigger: {
      eventNames: ['saveBoard'],
    },
  },
  'home.settings': {
    id: 'home.settings',
    type: 'customEvent',
    trigger: {
      eventNames: ['saveSettings'],
    },
  },
  'auth.analytics': {
    id: 'auth.analytics',
    type: 'customEvent',
    trigger: {
      eventNames: ['auth/change'],
    },
  },
  'auth.auth': {
    id: 'auth.auth',
    type: 'authChange',
  },
  'auth.email': {
    id: 'auth.email',
    type: 'customEvent',
    trigger: {
      eventNames: ['saveBoard'],
    },
  },
  'auth.google': {
    id: 'auth.google',
    type: 'customEvent',
    trigger: {
      eventNames: ['login/google'],
    },
  },
  'auth.logout': {
    id: 'auth.logout',
    type: 'customEvent',
    trigger: {
      eventNames: ['logout'],
    },
  },
  'auth.user': {
    id: 'auth.user',
    type: 'customEvent',
    trigger: {
      eventNames: ['auth/change'],
    },
  },
  'widgets.assetsList': {
    id: 'widgets.assetsList',
    type: 'component',
    trigger: {
      actionTypes: ['ASSET_LIST'],
      eventNames: ['list/focusChange'],
    },
  },
  'widgets.babylon': {
    id: 'widgets.babylon',
    type: 'component',
    trigger: {
      actionTypes: ['BABYLON_LOADED', 'PLAY', 'STOP'],
      eventNames: ['board/exit'],
    },
  },
  'widgets.fourthWall': {
    id: 'widgets.fourthWall',
    type: 'component',
    trigger: {
      eventNames: ['scene/ready'],
    },
  },
  'widgets.document': {
    id: 'widgets.document',
    type: 'component',
    trigger: {
      actionTypes: ['DOCUMENT', 'SET_DOCUMENT'],
    },
  },
  'widgets.flow': {
    id: 'widgets.flow',
    type: 'component',
    trigger: {
      eventNames: ['flow'],
    },
  },
  'widgets.productTour': {
    id: 'widgets.productTour',
    type: 'component',
    trigger: {
      actionTypes: ['PRODUCT_TOUR_LOADED', 'PLAY_TOUR', 'STOP'],
    },
  },
  'widgets.transcript': {
    id: 'widgets.transcript',
    type: 'component',
    trigger: {
      actionTypes: ['BOOTSTRAP_TRANSCRIPT'],
      eventNames: ['youtube/time'],
    },
  },
  'widgets.speech': {
    id: 'widgets.speech',
    type: 'component',
    trigger: {
      eventNames: ['board/loaded'],
    },
  },
  'widgets.speechParams': {
    id: 'widgets.speechParams',
    type: 'component',
    trigger: {
      actionTypes: ['GET_ASSET'],
    },
  },
  'widgets.clip.audio': {
    id: 'widgets.clip.audio',
    type: 'entity',
    trigger: {
      actionTypes: ['AUDIO'],
    },
  },
  'widgets.clip.bits': {
    id: 'widgets.clip.bits',
    type: 'entity',
    trigger: {
      actionTypes: ['BIT'],
    },
  },
  'widgets.clip.bootstrap': {
    id: 'widgets.clip.bootstrap',
    type: 'customEvent',
    trigger: {
      actionTypes: ['scene/ready'],
    },
  },
  'widgets.clip.dots': {
    id: 'widgets.clip.dots',
    type: 'customEvent',
    trigger: {
      actionTypes: ['virtualDot/click'],
    },
  },
  'widgets.clip.effects': {
    id: 'widgets.clip.effects',
    type: 'entity',
    trigger: {
      actionTypes: ['EFFECT'],
    },
  },
  'widgets.clip.elements': {
    id: 'widgets.clip.elements',
    type: 'entity',
    trigger: {
      eventNames: ['SCENE_ELEMENT'],
    },
  },
  'widgets.clip.live': {
    id: 'widgets.clip.live',
    type: 'socket',
    trigger: {
      eventNames: ['clip/live'],
    },
  },
  'widgets.clip.keys': {
    id: 'widgets.clip.keys',
    type: 'keys',
    trigger: {
      keyNames: ['a', 's', 'd', 'w', 'c'],
    },
  },
  'widgets.clip.keyframes': {
    id: 'widgets.clip.keyframes',
    type: 'customEvent',
    trigger: {
      eventNames: ['keyframe/createOrUpdate'],
    },
  },
  'widgets.clip.position.camera': {
    id: 'widgets.clip.position.camera',
    type: 'customEvent',
    trigger: {
      eventNames: ['camera/move', 'camera/change'],
    },
  },
  'widgets.clip.position.mesh': {
    id: 'widgets.clip.position.mesh',
    type: 'customEvent',
    trigger: {
      actionTypes: ['mesh/move'],
    },
  },
  'widgets.clip.save': {
    id: 'widgets.clip.save',
    type: 'customEvent',
    trigger: {
      actionTypes: ['clip/save'],
    },
  },
  'widgets.3d.selection': {
    id: 'widgets.3d.selection',
    type: 'customEvent',
    trigger: {
      eventNames: ['mesh/select'],
    },
  },
  'widgets.3d.grid': {
    id: 'widgets.3d.grid',
    type: 'predicate',
    trigger: {
      xpaths: ['sceneState.hideGrid'],
    },
  },
  'widgets.3d.manual': {
    id: 'widgets.3d.manual',
    type: 'customEvent',
    trigger: {
      eventNames: ['set/pos'],
    },
  },
  'widgets.3d.toolbox': {
    id: 'widgets.3d.toolbox',
    type: 'entity',
    trigger: {
      actionTypes: ['TOOLBOX'],
    },
  },
  'widgets.player.animation': {
    id: 'widgets.player.animation',
    type: 'customEvent',
    trigger: {
      eventNames: ['waveform/timeupdate'],
    },
  },
  'widgets.player.audio': {
    id: 'widgets.player.audio',
    type: 'customEvent',
    trigger: {
      eventNames: ['waveform/timeupdate'],
    },
  },
  'widgets.player.bits': {
    id: 'widgets.player.bits',
    type: 'entity',
    trigger: {
      actionTypes: ['BIT'],
    },
  },
  'widgets.player.bootstrap': {
    id: 'widgets.player.bootstrap',
    type: 'customEvent',
    trigger: {
      eventNames: ['scene/ready'],
    },
  },
  'widgets.player.characters': {
    id: 'widgets.player.characters',
    type: 'customEvent',
    trigger: {
      eventNames: ['clip/speech'],
    },
  },
  'widgets.player.loader': {
    id: 'widgets.player.loader',
    type: 'customEvent',
    trigger: {
      eventNames: ['scene/assets/preload'],
    },
  },
  'widgets.player.effects': {
    id: 'widgets.player.effects',
    type: 'customEvent',
    trigger: {
      eventNames: ['waveform/timeupdate'],
    },
  },
  'widgets.player.playback': {
    id: 'widgets.player.playback',
    type: 'customEvent',
    trigger: {
      eventNames: ['waveform/play', 'waveform/pause'],
    },
  },
  'widgets.player.preloadImages': {
    id: 'widgets.player.preloadImages',
    type: 'customEvent',
    trigger: {
      eventNames: ['waveform/play'],
    },
  },
  'widgets.player.setPiece': {
    id: 'widgets.player.setPiece',
    type: 'customEvent',
    trigger: {
      eventNames: ['waveform/timeupdate'],
    },
  },
  'widgets.player.subtitles': {
    id: 'widgets.player.subtitles',
    type: 'customEvent',
    trigger: {
      eventNames: ['clip/speech'],
    },
  },
  'widgets.player.time': {
    id: 'widgets.player.time',
    type: 'customEvent',
    trigger: {
      eventNames: ['waveform/ready', 'waveform/timeupdate'],
    },
  },
  'widgets.scene.bootstrap': {
    id: 'widgets.scene.bootstrap',
    type: 'customEvent',
    trigger: {
      eventNames: ['scene/ready'],
    },
  },
  'widgets.scene.elements': {
    id: 'widgets.scene.elements',
    type: 'customEvent',
    trigger: {
      eventNames: ['scene/elements'],
    },
  },
  'widgets.scene.keys': {
    id: 'widgets.scene.keys',
    type: 'keys',
    trigger: {
      keyNames: ['delete'],
    },
  },
  'widgets.scene.onAdd': {
    id: 'widgets.scene.onAdd',
    type: 'crud',
    trigger: {
      nodeNames: ['sceneLight', 'sceneMesh', 'sceneExternal'],
    },
  },
  'widgets.scene.onDelete': {
    id: 'widgets.scene.onDelete',
    type: 'crud',
    trigger: {
      nodeNames: ['sceneLight', 'sceneMesh', 'sceneExternal'],
    },
  },
  'widgets.scene.onMove': {
    id: 'widgets.scene.onMove',
    type: 'customEvent',
    trigger: {
      eventNames: ['element/move'],
    },
  },
  'widgets.scene.onVisible': {
    id: 'widgets.scene.onVisible',
    type: 'crud',
    trigger: {
      nodeNames: ['sceneLight', 'sceneMesh', 'sceneExternal'],
    },
  },
  'widgets.scene.save': {
    id: 'widgets.scene.save',
    type: 'entity',
    trigger: {
      actionTypes: ['SCENE_SAVE'],
    },
  },
};
