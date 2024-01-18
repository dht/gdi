import { MeshBuilder } from '@babylonjs/core';
import { IMesh, MeshType } from '@gdi/store-iso';
import { scene } from './globals';
import { applyMaterial, applyMeshListeners, applyVectors } from './iso.utils';

const methods: Record<MeshType, any> = {
  ground: MeshBuilder.CreateGround,
  sphere: MeshBuilder.CreateSphere,
  box: MeshBuilder.CreateBox,
  capsule: MeshBuilder.CreateCapsule,
  cylinder: MeshBuilder.CreateCylinder,
  torus: MeshBuilder.CreateTorus,
  dashedLines: MeshBuilder.CreateDashedLines,
  lines: MeshBuilder.CreateLines,
  plane: MeshBuilder.CreatePlane,
  polygon: MeshBuilder.CreatePolygon,
  ribbon: MeshBuilder.CreateRibbon,
  tiledBox: MeshBuilder.CreateTiledBox,
  tiledPlane: MeshBuilder.CreateTiledPlane,
  torusKnot: MeshBuilder.CreateTorusKnot,
  tube: MeshBuilder.CreateTube,
  polyhedron: MeshBuilder.CreatePolyhedron,
  icoSphere: MeshBuilder.CreateIcoSphere,
  lathe: MeshBuilder.CreateLathe,
  disc: MeshBuilder.CreateDisc,
  geodesic: MeshBuilder.CreateGeodesic,
  topography: MeshBuilder.CreateGroundFromHeightMap,
  goldberg: MeshBuilder.CreateGoldberg,
};

export const addObject = (item: IMesh) => {
  const { id, values, enabled = true } = item;

  const method = methods[item.type];

  const obj = method(id, values, scene);
  applyVectors(obj, item);
  applyMaterial(obj, item);
  applyMeshListeners(obj, 'mesh');

  obj.setEnabled(enabled);

  return obj;
};

export const addGround = (ground: IMesh) => {
  const { id, values, enabled = true } = ground;
  const { width = 1, height = 1, opacity } = values ?? {};

  const output = MeshBuilder.CreateGround(
    id,
    {
      width,
      height,
    },
    scene
  );

  if (opacity) {
    output.visibility = opacity;
  }

  applyVectors(output, ground);
  applyMaterial(output, ground);
  applyMeshListeners(output, 'mesh');
  output.setEnabled(enabled);

  return output;
};

export const addTopography = (ground: IMesh) => {
  const { id, values, enabled = true } = ground;
  const {
    heightMap,
    width = 1,
    height = 1,
    minHeight = 0,
    maxHeight = 1,
    subdivisions = 10,
  } = values ?? {};

  const output = MeshBuilder.CreateGroundFromHeightMap(id, heightMap, {
    width,
    height,
    subdivisions,
    maxHeight,
    minHeight,
  });

  applyVectors(output, ground);
  applyMaterial(output, ground);
  applyMeshListeners(output, 'mesh');
  output.setEnabled(enabled);

  return output;
};

export const addMesh = (mesh: IMesh) => {
  const method = map[mesh.type];

  if (!method) {
    throw new Error(`Mesh type '${mesh.type}' not supported.`);
  }

  return method(mesh);
};

export const map: Record<MeshType, any> = {
  ground: addGround,
  topography: addTopography,
  sphere: addObject,
  box: addObject,
  capsule: addObject,
  cylinder: addObject,
  torus: addObject,
  dashedLines: addObject,
  lines: addObject,
  plane: addObject,
  polygon: addObject,
  ribbon: addObject,
  tiledBox: addObject,
  tiledPlane: addObject,
  torusKnot: addObject,
  tube: addObject,
  polyhedron: addObject,
  icoSphere: addObject,
  lathe: addObject,
  disc: addObject,
  geodesic: addObject,
  goldberg: addObject,
};
