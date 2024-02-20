import { ISceneDynamic } from '@gdi/store-iso';
import { scene } from '../../globals';
import {
  Color3,
  Mesh,
  MeshBuilder,
  NodeMaterial,
  SceneLoader,
  StandardMaterial,
  Vector3,
  VertexBuffer,
  VertexData,
} from '@babylonjs/core';

export async function addDynamics(dynamic: ISceneDynamic[]) {
  let size = 5 * 6;

  let sphere = MeshBuilder.CreateSphere(
    '',
    {
      diameter: size,
      segments: 9 * 4,
    },
    scene
  );

  let material = new StandardMaterial('TextPlaneMaterial', scene);
  material.backFaceCulling = false;
  material.emissiveColor = new Color3(1, 1, 0);
  let customMesh = new Mesh('custom', scene);

  customMesh.material = material;

  sphere.isVisible = false;

  let sphere_positions: any = sphere.getVerticesData(VertexBuffer.PositionKind);
  let sphere_indices: any = sphere.getIndices();

  let vertexData: any = new VertexData();
  vertexData.positions = [];
  vertexData.indices = [];
  vertexData.direction = [];

  let idx = 0;
  let addPoses = (p1: any, p2: any, p3: any) => {
    vertexData.positions.push(p1.x);
    vertexData.positions.push(p1.y);
    vertexData.positions.push(p1.z);

    vertexData.positions.push(p2.x);
    vertexData.positions.push(p2.y);
    vertexData.positions.push(p2.z);

    vertexData.positions.push(p3.x);
    vertexData.positions.push(p3.y);
    vertexData.positions.push(p3.z);

    vertexData.indices.push(idx++);
    vertexData.indices.push(idx++);
    vertexData.indices.push(idx++);

    let f1 = 1;
    let f2 = 2;
    let f3 = 0.1;
    let direction1 = new Vector3(
      0.5 * f1 - f1 * Math.random(),
      0.5 * f1 - f1 * Math.random(),
      0.5 * f1 - f1 * Math.random()
    );

    vertexData.direction.push(direction1);
    vertexData.direction.push(direction1);
    vertexData.direction.push(direction1);
  };

  let p0 = Vector3.Zero();
  let p1 = Vector3.Zero();
  let p2 = Vector3.Zero();
  let p3 = Vector3.Zero();
  let p4 = Vector3.Zero();

  for (let i = 0; i < sphere_indices.length; i += 3) {
    let v1 = sphere_indices[i] * 3;
    let v2 = sphere_indices[i + 1] * 3;
    let v3 = sphere_indices[i + 2] * 3;

    p1.set(sphere_positions[v1 + 0], sphere_positions[v1 + 1], sphere_positions[v1 + 2]);
    p2.set(sphere_positions[v2 + 0], sphere_positions[v2 + 1], sphere_positions[v2 + 2]);
    p3.set(sphere_positions[v3 + 0], sphere_positions[v3 + 1], sphere_positions[v3 + 2]);

    addPoses(p1, p2, p3);
  }

  vertexData.applyToMesh(customMesh);

  let startTime = Date.now(); // Record the start time
  let gravitation = new Vector3(0, -9.8 * 0.005, 0);
  let ymax = size * 0.1;
  let ymin = -ymax;

  scene.registerBeforeRender(() => {
    let currentTime = Date.now(); // Get the current time
    let elapsedTime = (10 * (currentTime - startTime)) / 1000; // Calculate elapsed time in seconds
    startTime = currentTime; // Update start time for the next frame

    for (let i = 0; i < vertexData.indices.length; i += 3) {
      let v1 = vertexData.indices[i] * 3;
      let v2 = vertexData.indices[i + 1] * 3;
      let v3 = vertexData.indices[i + 2] * 3;

      p1.set(
        vertexData.positions[v1 + 0],
        vertexData.positions[v1 + 1],
        vertexData.positions[v1 + 2]
      );
      p2.set(
        vertexData.positions[v2 + 0],
        vertexData.positions[v2 + 1],
        vertexData.positions[v2 + 2]
      );
      p3.set(
        vertexData.positions[v3 + 0],
        vertexData.positions[v3 + 1],
        vertexData.positions[v3 + 2]
      );

      let x = 0.07 * elapsedTime; // Scale movement by elapsed time

      let direction = vertexData.direction[i];
      direction = direction.scale(x);
      if (p1.y < ymax) p1.addInPlace(direction);

      direction = vertexData.direction[i + 1];
      direction = direction.scale(x);
      if (p2.y < ymax) p2.addInPlace(direction);
      direction = vertexData.direction[i + 2];
      direction = direction.scale(x);

      if (p3.y < ymax) p3.addInPlace(direction);

      p1.addInPlace(gravitation.scale(elapsedTime)); // Apply gravity based on elapsed time
      p2.addInPlace(gravitation.scale(elapsedTime));
      p3.addInPlace(gravitation.scale(elapsedTime));

      if (p1.y < ymin) {
        p1.y = ymin;
        vertexData.direction[i].scaleInPlace(0.99);
      }
      if (p2.y < ymin) {
        p2.y = ymin;
        vertexData.direction[i + 1].scaleInPlace(0.99);
      }
      if (p3.y < ymin) {
        p3.y = ymin;
        vertexData.direction[i + 2].scaleInPlace(0.99);
      }

      vertexData.positions[v1 + 0] = p1.x;
      vertexData.positions[v1 + 1] = p1.y;
      vertexData.positions[v1 + 2] = p1.z;

      vertexData.positions[v2 + 0] = p2.x;
      vertexData.positions[v2 + 1] = p2.y;
      vertexData.positions[v2 + 2] = p2.z;

      vertexData.positions[v3 + 0] = p3.x;
      vertexData.positions[v3 + 1] = p3.y;
      vertexData.positions[v3 + 2] = p3.z;
    }

    vertexData.applyToMesh(customMesh);
  });
}
