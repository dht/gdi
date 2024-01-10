export enum MouthShape {
  none = 'none',
  a = 'a',
  e = 'e',
  fv = 'fv',
  ln = 'ln',
  mbp = 'mbp',
  o = 'o',
  st = 'st',
  uq = 'uq',
  wr = 'wr',
}

export enum MouthShapeBack {
  none = 'none',
  n = 'n',
  b = 'b',
}

export const mouthShapesMap = {
  // Consonants:
  p: MouthShape.mbp,
  b: MouthShape.mbp,
  t: MouthShape.st,
  d: MouthShape.none,
  k: MouthShape.none,
  g: MouthShape.none,
  f: MouthShape.fv,
  v: MouthShape.fv,
  s: MouthShape.st,
  z: MouthShape.none,
  ʃ: MouthShape.none,
  ʒ: MouthShape.none,
  h: MouthShape.none,
  m: MouthShape.mbp,
  n: MouthShape.ln,
  ŋ: MouthShape.ln,
  l: MouthShape.ln,
  r: MouthShape.wr,
  j: MouthShape.none,
  w: MouthShape.wr,
  // Vowels:
  i: MouthShape.none,
  ɪ: MouthShape.none,
  e: MouthShape.e,
  ɛ: MouthShape.e,
  æ: MouthShape.e,
  a: MouthShape.a,
  ɑ: MouthShape.a,
  ʌ: MouthShape.a,
  ɔ: MouthShape.o,
  o: MouthShape.o,
  u: MouthShape.uq,
  ə: MouthShape.none,
};

export const mouthShapesBackMap = {
  // Consonants:
  p: MouthShapeBack.n,
  b: MouthShapeBack.n,
  t: MouthShapeBack.n,
  d: MouthShapeBack.n,
  k: MouthShapeBack.n,
  g: MouthShapeBack.n,
  f: MouthShapeBack.n,
  v: MouthShapeBack.n,
  s: MouthShapeBack.n,
  z: MouthShapeBack.n,
  ʃ: MouthShapeBack.n,
  ʒ: MouthShapeBack.n,
  h: MouthShapeBack.n,
  m: MouthShapeBack.n,
  n: MouthShapeBack.n,
  ŋ: MouthShapeBack.n,
  l: MouthShapeBack.n,
  r: MouthShapeBack.n,
  j: MouthShapeBack.n,
  w: MouthShapeBack.n,
  // Vowels:
  i: MouthShapeBack.n,
  ɪ: MouthShapeBack.b,
  e: MouthShapeBack.n,
  ɛ: MouthShapeBack.n,
  æ: MouthShapeBack.n,
  a: MouthShapeBack.b,
  ɑ: MouthShapeBack.n,
  ʌ: MouthShapeBack.n,
  ɔ: MouthShapeBack.n,
  o: MouthShapeBack.b,
  u: MouthShapeBack.n,
  ə: MouthShapeBack.n,
};

export type DataItem = {
  id: string;
  audioUrl: string;
  characterId: string;
  sentence: string;
  isBack?: boolean;
};

export const charactersMaps: any = {
  Arnold: { id: 'p7-man-phone', isBack: true },
  Rachel: { id: 'p1-woman-red', isBack: false },
  Sam: { id: 'p2-man-spikyHair', isBack: false },
};
