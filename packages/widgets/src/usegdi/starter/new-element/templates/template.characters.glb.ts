import { ISceneCharacter } from '@gdi/store-iso';

export const template: ISceneCharacter = {
  id: 'characters-{uid4}',
  url: '{asset-3d}',
  animations: [],
  meshNames: '',
  meshId: 'Ch36',
  rootId: '__root__',
  position: [10, -1.3, -0.5],
  rotation: [0, 1.6, 0],
  layerMask: 1,
  cornerFocus: 'left',
  mouthDecal: {
    id: 'mouth-man',
    position: [9.835, -0.2, -0.39],
    scaling: [0.0625, 0.0625, 0.25],
    values: {
      normal: [-57.21, 0.75, 2.99],
      destinationMeshId: 'Ch36',
      cullBackFaces: true,
      localMode: true,
      angle: 0,
    },
  },
  mouthShapeUrls: {
    aei: 'https://raw.githubusercontent.com/dht/gdi-assets/main/boards/assets/mouth-set-5/mouth_aei.png',
    bmp: 'https://raw.githubusercontent.com/dht/gdi-assets/main/boards/assets/mouth-set-5/mouth_bmp.png',
    cdgknstxyz:
      'https://raw.githubusercontent.com/dht/gdi-assets/main/boards/assets/mouth-set-5/mouth_cdgknstxyz.png',
    chshj:
      'https://raw.githubusercontent.com/dht/gdi-assets/main/boards/assets/mouth-set-5/mouth_chshj.png',
    Ee: 'https://raw.githubusercontent.com/dht/gdi-assets/main/boards/assets/mouth-set-5/mouth_Ee.png',
    fv: 'https://raw.githubusercontent.com/dht/gdi-assets/main/boards/assets/mouth-set-5/mouth_fv.png',
    l: 'https://raw.githubusercontent.com/dht/gdi-assets/main/boards/assets/mouth-set-5/mouth_l.png',
    o: 'https://raw.githubusercontent.com/dht/gdi-assets/main/boards/assets/mouth-set-5/mouth_o.png',
    qw: 'https://raw.githubusercontent.com/dht/gdi-assets/main/boards/assets/mouth-set-5/mouth_qw.png',
    r: 'https://raw.githubusercontent.com/dht/gdi-assets/main/boards/assets/mouth-set-5/mouth_r.png',
    th: 'https://raw.githubusercontent.com/dht/gdi-assets/main/boards/assets/mouth-set-5/mouth_th.png',
    u: 'https://raw.githubusercontent.com/dht/gdi-assets/main/boards/assets/mouth-set-5/mouth_u.png',
  },
};
