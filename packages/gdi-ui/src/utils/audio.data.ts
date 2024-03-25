export const sfxIds = {
  generic: '/sfx/beep_5.mp3',
  keyframe: '/sfx/beep_2.mp3',
  prompt: '/sfx/beep_5.mp3',
  copy: '/sfx/beep_5.mp3',
  paste: '/sfx/beep_5.mp3',
  click: '/sfx/click.mp3',
  close: '/sfx/close.mp3',
  content: '/sfx/content.mp3',
  error: '/sfx/error.mp3',
  info: '/sfx/info.mp3',
  intro: '/sfx/intro.mp3',
  open: '/sfx/open.mp3',
  type: '/sfx/type.mp3',
};

export type Sfx = keyof typeof sfxIds;
