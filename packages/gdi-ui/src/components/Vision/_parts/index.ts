import { FC } from 'react';
import { PanelId } from '../Vision.types';
import VisionHome from './VisionHome/VisionHome';
import VisionKeyboard from './VisionKeyboard/VisionKeyboard';
import VisionNotes from './VisionNotes/VisionNotes';
import VisionPreview from './VisionPreview/VisionPreview';
import VisionSafari from './VisionSafari/VisionSafari';
import VisionYoutube from './VisionYoutube/VisionYoutube';

export const allPanels: Record<PanelId, FC<any>> = {
  home: VisionHome,
  notes: VisionNotes,
  safari: VisionSafari,
  youtube: VisionYoutube,
  keyboard: VisionKeyboard,
  preview: VisionPreview,
};
