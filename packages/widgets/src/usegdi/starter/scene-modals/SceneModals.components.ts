import { ElementsManagerContainer } from '../element-manager/ElementsManager.container';
import { NewElementContainer } from '../new-element/NewElement.container';
import { BitManagerContainer } from '../bit-manager/BitManager.container';
import { ElementCodeContainer } from '../element-code/ElementCode.container';

export const allModals: any = {
  elements: {
    id: 'elements',
    title: 'Scene Elements',
    component: ElementsManagerContainer,
    width: 600,
    height: 700,
    extra: {
      middle: true,
    },
  },
  newElement: {
    id: 'newElement',
    title: 'Scene Elements',
    component: NewElementContainer,
    width: 800,
    height: 700,
    extra: {
      middle: true,
    },
  },
  editElement: {
    id: 'editElement',
    title: 'Edit Element',
    component: ElementCodeContainer,
    width: 800,
    height: 700,
    extra: {
      middle: true,
    },
  },
  bits: {
    id: 'bits',
    title: 'Scene Bits',
    component: BitManagerContainer,
    width: 600,
    height: 700,
    extra: {
      middle: true,
    },
  },
};
