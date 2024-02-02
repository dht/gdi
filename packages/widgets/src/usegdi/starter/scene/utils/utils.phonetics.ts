export enum MouthShape {
  none = 'none',
  aei = 'aei',
  bmp = 'bmp',
  cdgknstxyz = 'cdgknstxyz',
  chshj = 'chshj',
  Ee = 'Ee',
  fv = 'fv',
  l = 'l',
  o = 'o',
  qw = 'qw',
  r = 'r',
  th = 'th',
  u = 'u',
}

export const mouthShapesMap: { [key: string]: MouthShape } = {
  // Vowels
  i: MouthShape.aei, // as in "see"
  ɪ: MouthShape.aei, // as in "sit"
  e: MouthShape.Ee, // as in "set"
  æ: MouthShape.aei, // as in "sat"
  a: MouthShape.aei, // as in "father"
  ɑ: MouthShape.o, // as in "pot"
  ɒ: MouthShape.o, // as in "lot" (British English)
  ɔ: MouthShape.o, // as in "thought"
  o: MouthShape.o, // as in "go"
  u: MouthShape.u, // as in "blue"
  ʊ: MouthShape.u, // as in "good"
  ʌ: MouthShape.aei, // as in "strut"
  ə: MouthShape.aei, // as in "sofa"
  ɛ: MouthShape.Ee, // as in "bed"
  ɜ: MouthShape.aei, // as in "bird"
  ɞ: MouthShape.aei, // rounded version of ɜ
  ɤ: MouthShape.o, // as in "oboe"
  ɵ: MouthShape.o, // as in "lot" (some dialects)

  // Consonants
  b: MouthShape.bmp,
  p: MouthShape.bmp,
  m: MouthShape.bmp,
  f: MouthShape.fv,
  v: MouthShape.fv,
  θ: MouthShape.th, // voiceless as in "think"
  ð: MouthShape.th, // voiced as in "this"
  t: MouthShape.cdgknstxyz,
  d: MouthShape.cdgknstxyz,
  s: MouthShape.cdgknstxyz,
  z: MouthShape.cdgknstxyz,
  ʃ: MouthShape.chshj, // as in "shoe"
  ʒ: MouthShape.chshj, // as in "genre"
  ʧ: MouthShape.chshj, // as in "chop"
  ʤ: MouthShape.chshj, // as in "jog"
  n: MouthShape.cdgknstxyz,
  ŋ: MouthShape.cdgknstxyz, // as in "sing"
  l: MouthShape.l,
  r: MouthShape.r,
  ɹ: MouthShape.r, // as in "red"
  j: MouthShape.qw, // as in "yes"
  w: MouthShape.qw,
  ɡ: MouthShape.cdgknstxyz,
  k: MouthShape.cdgknstxyz,
  x: MouthShape.cdgknstxyz, // as in "loch" (Scottish)
  ɣ: MouthShape.cdgknstxyz, // voiced version of x
  h: MouthShape.none,
  ɥ: MouthShape.qw, // as in "hue"
  ʍ: MouthShape.qw, // voiceless version of w
  ɕ: MouthShape.chshj, // as in "she" (in some dialects)
  ʑ: MouthShape.chshj, // voiced version of ɕ
  ç: MouthShape.chshj, // as in "hue" (German)
  // Additional mappings can be added as needed
};
