import { Matrix, Quaternion } from '@babylonjs/core';

export type ISplatData = {
  vertexCount: number;
  positions: any;
  u_buffer: any;
  covA: any;
  covB: any;
};

export const parseSplatData = (binaryData: any): ISplatData => {
  let vertexCount: any;
  let positions: any;
  var u_buffer: any;
  let covA: any, covB: any;

  const rowLength = 3 * 4 + 3 * 4 + 4 + 4;
  vertexCount = binaryData.length / rowLength;
  positions = new Float32Array(3 * vertexCount);
  covA = new Float32Array(3 * vertexCount);
  covB = new Float32Array(3 * vertexCount);

  const f_buffer = new Float32Array(binaryData.buffer);
  u_buffer = new Uint8Array(binaryData.buffer);

  let matrixRotation = Matrix.Zero();
  let matrixScale = Matrix.Zero();
  let quaternion = Quaternion.Identity();
  for (let i = 0; i < vertexCount; i++) {
    positions[3 * i + 0] = f_buffer[8 * i + 0];
    positions[3 * i + 1] = f_buffer[8 * i + 1];
    positions[3 * i + 2] = f_buffer[8 * i + 2];

    quaternion.set(
      (u_buffer[32 * i + 28 + 1] - 128) / 128,
      (u_buffer[32 * i + 28 + 2] - 128) / 128,
      (u_buffer[32 * i + 28 + 3] - 128) / 128,
      -(u_buffer[32 * i + 28 + 0] - 128) / 128
    );
    quaternion.toRotationMatrix(matrixRotation);

    Matrix.ScalingToRef(
      f_buffer[8 * i + 3 + 0] * 2,
      f_buffer[8 * i + 3 + 1] * 2,
      f_buffer[8 * i + 3 + 2] * 2,
      matrixScale
    );

    const M = matrixRotation.multiply(matrixScale).m;

    covA[i * 3 + 0] = M[0] * M[0] + M[1] * M[1] + M[2] * M[2];
    covA[i * 3 + 1] = M[0] * M[4] + M[1] * M[5] + M[2] * M[6];
    covA[i * 3 + 2] = M[0] * M[8] + M[1] * M[9] + M[2] * M[10];
    covB[i * 3 + 0] = M[4] * M[4] + M[5] * M[5] + M[6] * M[6];
    covB[i * 3 + 1] = M[4] * M[8] + M[5] * M[9] + M[6] * M[10];
    covB[i * 3 + 2] = M[8] * M[8] + M[9] * M[9] + M[10] * M[10];
  }

  return {
    vertexCount,
    positions,
    u_buffer,
    covA,
    covB,
  };
};

export const refreshMatrix = (matricesData: any, idxMix: any, splatData: ISplatData) => {
  const { vertexCount, covA, covB, positions, u_buffer } = splatData;

  for (let j = 0; j < vertexCount; j++) {
    const i = idxMix[2 * j];
    const index = j * 16;
    matricesData[index + 0] = positions[i * 3 + 0];
    matricesData[index + 1] = positions[i * 3 + 1];
    matricesData[index + 2] = positions[i * 3 + 2];

    matricesData[index + 4] = u_buffer[32 * i + 24 + 0] / 255;
    matricesData[index + 5] = u_buffer[32 * i + 24 + 1] / 255;
    matricesData[index + 6] = u_buffer[32 * i + 24 + 2] / 255;
    matricesData[index + 7] = u_buffer[32 * i + 24 + 3] / 255;

    matricesData[index + 8] = covA[i * 3 + 0];
    matricesData[index + 9] = covA[i * 3 + 1];
    matricesData[index + 10] = covA[i * 3 + 2];

    matricesData[index + 12] = covB[i * 3 + 0];
    matricesData[index + 13] = covB[i * 3 + 1];
    matricesData[index + 14] = covB[i * 3 + 2];
  }
};
