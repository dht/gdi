import { template as templateExternalAudio } from './template.externals.audio';
import { template as templateExternalGlb } from './template.externals.glb';
import { template as templateLightDirectional } from './template.light.directional';
import { template as templateLightHemispheric } from './template.light.hemispheric';
import { template as templateLightPoint } from './template.light.point';
import { template as templateLightSpotlight } from './template.light.spotlight';
import { template as templateMeshBox } from './template.mesh.box';
import { template as templateMeshCapsule } from './template.mesh.capsule';
import { template as templateMeshCylinder } from './template.mesh.cylinder';
import { template as templateMeshDashedLines } from './template.mesh.dashedLines';
import { template as templateMeshDisc } from './template.mesh.disc';
import { template as templateMeshGoldberg } from './template.mesh.goldberg';
import { template as templateMeshGround } from './template.mesh.ground';
import { template as templateMeshGroundHeightMap } from './template.mesh.groundHeightMap';
import { template as templateMeshIsoSphere } from './template.mesh.isoSphere';
import { template as templateMeshLathe } from './template.mesh.lathe';
import { template as templateMeshLines } from './template.mesh.lines';
import { template as templateMeshPlane } from './template.mesh.plane';
import { template as templateMeshPolygon } from './template.mesh.polygon';
import { template as templateMeshPolyhedron } from './template.mesh.polyhedron';
import { template as templateMeshRibbon } from './template.mesh.ribbon';
import { template as templateMeshSphere } from './template.mesh.sphere';
import { template as templateMeshTorus } from './template.mesh.torus';
import { template as templateMeshTorusKnot } from './template.mesh.torusKnot';
import { template as templateMeshTopography } from './template.mesh.topography';
import { template as templateMeshTube } from './template.mesh.tube';
import { template as templateVideoWall } from './template.video.wall';
import { template as templateCharactersGlb } from './template.characters.glb';
import { template as templateDynamicSphere } from './template.dynamic.sphere';
import { get } from 'lodash';

export const allTemplates: any = {
  externals: {
    _default: templateExternalGlb,
    glb: templateExternalGlb,
    audio: templateExternalAudio,
  },
  lights: {
    _default: templateLightDirectional,
    directional: templateLightDirectional,
    hemispheric: templateLightHemispheric,
    point: templateLightPoint,
    spotlight: templateLightSpotlight,
  },
  meshes: {
    _default: templateMeshBox,
    box: templateMeshBox,
    capsule: templateMeshCapsule,
    cylinder: templateMeshCylinder,
    dashedLines: templateMeshDashedLines,
    disc: templateMeshDisc,
    goldberg: templateMeshGoldberg,
    ground: templateMeshGround,
    groundHeightMap: templateMeshGroundHeightMap,
    isoSphere: templateMeshIsoSphere,
    lathe: templateMeshLathe,
    lines: templateMeshLines,
    plane: templateMeshPlane,
    polygon: templateMeshPolygon,
    polyhedron: templateMeshPolyhedron,
    ribbon: templateMeshRibbon,
    sphere: templateMeshSphere,
    torus: templateMeshTorus,
    torusKnot: templateMeshTorusKnot,
    topography: templateMeshTopography,
    tube: templateMeshTube,
  },
  video: {
    _default: templateVideoWall,
    wall: templateVideoWall,
  },
  characters: {
    _default: templateCharactersGlb,
    glb: templateCharactersGlb,
  },
  dynamics: {
    _default: templateDynamicSphere,
    sphere: templateDynamicSphere,
  },
};

export const getTemplateCode = (familyId: string = 'externals', elementId: string = '_default') => {
  const template =
    get(allTemplates, [familyId, elementId]) ||
    get(allTemplates, [familyId, '_default']) ||
    allTemplates.externals._default;

  return JSON.stringify(template, null, 2);
};
