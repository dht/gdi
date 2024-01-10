import React from 'react';
import { MarkerType, Position } from 'reactflow';

export const nodes = [
  {
    id: '1',
    type: 'input',
    data: {
      label: 'Prompt',
    },
    style: {
      background: '#63B3ED',
      color: 'white',
    },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: {
      label: 'Generate transcript',
    },
    position: { x: 250, y: 100 },
  },
  {
    id: '3',
    data: {
      label: 'Phonetics',
    },
    position: { x: 150, y: 200 },
  },
  {
    id: '4',
    data: {
      label: 'Speech',
    },
    position: { x: 350, y: 200 },
  },
  {
    id: '5',
    type: 'output',
    data: {
      label: 'Play animation',
    },
    position: { x: 250, y: 300 },
  },
];

export const edges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];
