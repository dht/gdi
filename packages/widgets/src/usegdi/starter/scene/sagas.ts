import { saga as sagaBaseGrid } from './base/sagas.base.grid';
import { saga as sagaBaseManual } from './base/sagas.base.manual';
import { saga as sagaBaseSelection } from './base/sagas.base.selection';
import { saga as sagaBaseToolbox } from './base/sagas.base.toolbox';
import { saga as sagaClipAudio } from './clip/sagas.clip.audio';
import { saga as sagaClipBits } from './clip/sagas.clip.bits';
import { saga as sagaClipBootstrap } from './clip/sagas.clip.bootstrap';
import { saga as sagaClipDots } from './clip/sagas.clip.dots';
import { saga as sagaClipEffects } from './clip/sagas.clip.effects';
import { saga as sagaClipElements } from './clip/sagas.clip.elements';
import { saga as sagaClipKeys } from './clip/sagas.clip.keys';
import { saga as sagaClipKeyframes } from './clip/sagas.clip.keyframes';
import { saga as sagaClipLive } from './clip/sagas.clip.live';
import { saga as sagaClipPositionCamera } from './clip/sagas.clip.position.camera';
import { saga as sagaClipPositionMesh } from './clip/sagas.clip.position.mesh';
import { saga as sagaClipSave } from './clip/sagas.clip.save';
import { saga as sagaPlayerAnimation } from './player/sagas.player.animation';
import { saga as sagaPlayerAudio } from './player/sagas.player.audio';
import { saga as sagaPlayerBootstrap } from './player/sagas.player.bootstrap';
import { saga as sagaPlayerCharacters } from './player/sagas.player.characters';
import { saga as sagaPlayerEffects } from './player/sagas.player.effects';
import { saga as sagaPlayerLoader } from './player/sagas.player.loader';
import { saga as sagaPlayerPlayback } from './player/sagas.player.playback';
import { saga as sagaPlayerPreloadImages } from './player/sagas.player.preloadImages';
import { saga as sagaPlayerSetPiece } from './player/sagas.player.setPiece';
import { saga as sagaPlayerSubtitles } from './player/sagas.player.subtitles';
import { saga as sagaPlayerTime } from './player/sagas.player.time';
import { saga as sagaSceneBootstrap } from './scene/sagas.scene.bootstrap';
import { saga as sagaSceneElements } from './scene/sagas.scene.elements';
import { saga as sagaSceneKeys } from './scene/sagas.scene.keys';
import { saga as sagaSceneLive } from './scene/sagas.scene.live';
import { saga as sagaSceneOnAdd } from './scene/sagas.scene.onAdd';
import { saga as sagaSceneOnDelete } from './scene/sagas.scene.onDelete';
import { saga as sagaSceneOnMove } from './scene/sagas.scene.onMove';
import { saga as sagaSceneOnVisible } from './scene/sagas.scene.onVisible';
import { saga as sagaSceneSave } from './scene/sagas.scene.save';

export const sagas = {
  'widgets.3d.grid': sagaBaseGrid,
  'widgets.3d.manual': sagaBaseManual,
  'widgets.3d.selection': sagaBaseSelection,
  'widgets.3d.toolbox': sagaBaseToolbox,
  'widgets.clip.audio': sagaClipAudio,
  'widgets.clip.bits': sagaClipBits,
  'widgets.clip.bootstrap': sagaClipBootstrap,
  'widgets.clip.dots': sagaClipDots,
  'widgets.clip.effects': sagaClipEffects,
  'widgets.clip.elements': sagaClipElements,
  'widgets.clip.keys': sagaClipKeys,
  'widgets.clip.keyframes': sagaClipKeyframes,
  'widgets.clip.live': sagaClipLive,
  'widgets.clip.position.camera': sagaClipPositionCamera,
  'widgets.clip.position.mesh': sagaClipPositionMesh,
  'widgets.clip.save': sagaClipSave,
  'widgets.player.animation': sagaPlayerAnimation,
  'widgets.player.audio': sagaPlayerAudio,
  'widgets.player.bootstrap': sagaPlayerBootstrap,
  'widgets.player.characters': sagaPlayerCharacters,
  'widgets.player.effects': sagaPlayerEffects,
  'widgets.player.loader': sagaPlayerLoader,
  'widgets.player.playback': sagaPlayerPlayback,
  'widgets.player.preloadImages': sagaPlayerPreloadImages,
  'widgets.player.setPiece': sagaPlayerSetPiece,
  'widgets.player.subtitles': sagaPlayerSubtitles,
  'widgets.player.time': sagaPlayerTime,
  'widgets.scene.bootstrap': sagaSceneBootstrap,
  'widgets.scene.elements': sagaSceneElements,
  'widgets.scene.keys': sagaSceneKeys,
  'widgets.scene.live': sagaSceneLive,
  'widgets.scene.onAdd': sagaSceneOnAdd,
  'widgets.scene.onDelete': sagaSceneOnDelete,
  'widgets.scene.onMove': sagaSceneOnMove,
  'widgets.scene.onVisible': sagaSceneOnVisible,
  'widgets.scene.save': sagaSceneSave,
};
