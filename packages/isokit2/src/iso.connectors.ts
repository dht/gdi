import { Color3, CreateGreasedLine, GreasedLineMeshColorDistribution } from '@babylonjs/core';
import { IConnector, IConnectors } from '@gdi/store-iso';
import { scene } from './globals';

export const addConnector = (connector: IConnector) => {
  const { id, sourceId, targetId } = connector;

  const source = scene.meshes.find((mesh) => mesh.id === sourceId);
  const target = scene.meshes.find((mesh) => mesh.id === targetId);

  if (!source || !target) {
    return;
  }

  const colors = [Color3.Red(), Color3.Green(), Color3.Blue(), Color3.Yellow()];
  const points = [source.position.clone(), target.position.clone()];

  const instance = CreateGreasedLine(
    id,
    {
      points,
      updatable: true,
    },
    {
      useColors: true,
      width: 0.2,
      colors,
      colorDistribution: GreasedLineMeshColorDistribution.COLOR_DISTRIBUTION_END,
    }
  );

  return instance;
};

export const addConnectors = (connectors: IConnectors) => {
  for (const connector of Object.values(connectors)) {
    addConnector(connector);
  }
};

export const removeConnector = (id: string) => {
  const connector = scene.meshes.find((mesh) => mesh.id === id);

  if (connector) {
    connector.dispose();
  }
};

export const updateConnector = (connector: IConnector) => {
  const { id, sourceId, targetId } = connector;

  const instance = scene.meshes.find((mesh) => mesh.id === id) as any;

  if (!instance) {
    return;
  }

  const source = scene.meshes.find((mesh) => mesh.id === sourceId);
  const target = scene.meshes.find((mesh) => mesh.id === targetId);

  if (!source || !target) {
    return;
  }

  instance.setPoints([
    [
      source.position.x,
      source.position.y,
      source.position.z,
      target.position.x,
      target.position.y,
      target.position.z,
    ],
  ]);
};

export const updateConnectors = (connectors: IConnectors) => {
  for (const connector of Object.values(connectors)) {
    updateConnector(connector);
  }
};

export const clearConnectors = (ids: string) => {
  for (const id of ids) {
    removeConnector(id);
  }
};
