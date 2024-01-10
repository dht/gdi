import {
  Color3,
  Color4,
  GoldbergCreationOption,
  ICreateCapsuleOptions,
  LinesMesh,
  Material,
  Mesh,
  Nullable,
  Plane,
  Vector2,
} from '@babylonjs/core';
import { IVector, IVector4 } from './types.iso';

export type ICreateBox = {
  width?: number;
  height?: number;
  depth?: number;
  faceUV?: IVector4[];
  faceColors?: Color4[];
  sideOrientation?: number;
  frontUVs?: IVector4;
  backUVs?: IVector4;
  wrap?: boolean;
  topBaseAt?: number;
  bottomBaseAt?: number;
  updatable?: boolean;
};

export type ICreateTiledBox = {
  pattern?: number;
  width?: number;
  height?: number;
  depth?: number;
  tileSize?: number;
  tileWidth?: number;
  tileHeight?: number;
  alignHorizontal?: number;
  alignVertical?: number;
  faceUV?: IVector4[];
  faceColors?: Color4[];
  sideOrientation?: number;
  updatable?: boolean;
};

export type ICreateSphere = {
  segments?: number;
  diameter?: number;
  diameterX?: number;
  diameterY?: number;
  diameterZ?: number;
  arc?: number;
  slice?: number;
  sideOrientation?: number;
  frontUVs?: IVector4;
  backUVs?: IVector4;
  updatable?: boolean;
};

export type ICreateDisc = {
  radius?: number;
  tessellation?: number;
  arc?: number;
  updatable?: boolean;
  sideOrientation?: number;
  frontUVs?: IVector4;
  backUVs?: IVector4;
};

export type ICreateIcoSphere = {
  radius?: number;
  radiusX?: number;
  radiusY?: number;
  radiusZ?: number;
  flat?: boolean;
  subdivisions?: number;
  sideOrientation?: number;
  frontUVs?: IVector4;
  backUVs?: IVector4;
  updatable?: boolean;
};

export type ICreateRibbon = {
  pathArray: IVector[][];
  closeArray?: boolean;
  closePath?: boolean;
  offset?: number;
  updatable?: boolean;
  sideOrientation?: number;
  frontUVs?: IVector4;
  backUVs?: IVector4;
  instance?: Mesh;
  invertUV?: boolean;
  uvs?: Vector2[];
  colors?: Color4[];
};

export type ICreateCylinder = {
  height?: number;
  diameterTop?: number;
  diameterBottom?: number;
  diameter?: number;
  tessellation?: number;
  subdivisions?: number;
  arc?: number;
  faceColors?: Color4[];
  faceUV?: IVector4[];
  updatable?: boolean;
  hasRings?: boolean;
  enclose?: boolean;
  cap?: number;
  sideOrientation?: number;
  frontUVs?: IVector4;
  backUVs?: IVector4;
};

export type ICreateTorus = {
  diameter?: number;
  thickness?: number;
  tessellation?: number;
  updatable?: boolean;
  sideOrientation?: number;
  frontUVs?: IVector4;
  backUVs?: IVector4;
};

export type ICreateTorusKnot = {
  radius?: number;
  tube?: number;
  radialSegments?: number;
  tubularSegments?: number;
  p?: number;
  q?: number;
  updatable?: boolean;
  sideOrientation?: number;
  frontUVs?: IVector4;
  backUVs?: IVector4;
};

export type ICreateLines = {
  points: IVector[];
  updatable?: boolean;
  instance?: Nullable<LinesMesh>;
  colors?: Color4[];
  useVertexAlpha?: boolean;
  material?: Material;
};

export type ICreateDashedLines = {
  points: IVector[];
  dashSize?: number;
  gapSize?: number;
  dashNb?: number;
  updatable?: boolean;
  instance?: LinesMesh;
  useVertexAlpha?: boolean;
  material?: Material;
};

export type ICreateLathe = {
  shape: IVector[];
  radius?: number;
  tessellation?: number;
  clip?: number;
  arc?: number;
  closed?: boolean;
  updatable?: boolean;
  sideOrientation?: number;
  frontUVs?: IVector4;
  backUVs?: IVector4;
  cap?: number;
  invertUV?: boolean;
};

export type ICreatePlane = {
  size?: number;
  width?: number;
  height?: number;
  sideOrientation?: number;
  frontUVs?: IVector4;
  backUVs?: IVector4;
  updatable?: boolean;
  sourcePlane?: Plane;
};

export type ICreateGround = {
  width?: number;
  height?: number;
  subdivisions?: number;
  subdivisionsX?: number;
  subdivisionsY?: number;
  updatable?: boolean;
};

export type ICreateTopography = {
  width?: number;
  height?: number;
  subdivisions?: number;
  minHeight?: number;
  maxHeight?: number;
  colorFilter?: Color3;
  alphaFilter?: number;
  updatable?: boolean;
};

export type ICreatePolygon = {
  shape: IVector[];
  holes?: IVector[][];
  depth?: number;
  smoothingThreshold?: number;
  faceUV?: IVector4[];
  faceColors?: Color4[];
  updatable?: boolean;
  sideOrientation?: number;
  frontUVs?: IVector4;
  backUVs?: IVector4;
  wrap?: boolean;
};

export type ICreateTube = {
  path: IVector[];
  radius?: number;
  tessellation?: number;
  radiusFunction?: {
    (i: number, distance: number): number;
  };
  cap?: number;
  arc?: number;
  updatable?: boolean;
  sideOrientation?: number;
  frontUVs?: IVector4;
  backUVs?: IVector4;
  instance?: Mesh;
  invertUV?: boolean;
};

export type ICreatePolyhedron = {
  type?: number;
  size?: number;
  sizeX?: number;
  sizeY?: number;
  sizeZ?: number;
  custom?: any;
  faceUV?: IVector4[];
  faceColors?: Color4[];
  flat?: boolean;
  updatable?: boolean;
  sideOrientation?: number;
  frontUVs?: IVector4;
  backUVs?: IVector4;
};

export type ICreateGeoDisc = {
  m?: number;
  n?: number;
  size?: number;
  sizeX?: number;
  sizeY?: number;
  sizeZ?: number;
  faceUV?: IVector4[];
  faceColors?: Color4[];
  flat?: boolean;
  updatable?: boolean;
  sideOrientation?: number;
  frontUVs?: IVector4;
  backUVs?: IVector4;
};

export type ICreateGoldberg = GoldbergCreationOption;

export type ICreateCapsule = ICreateCapsuleOptions;
