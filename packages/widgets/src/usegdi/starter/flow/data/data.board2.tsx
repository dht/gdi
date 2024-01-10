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
    id: '2a',
    data: {
      label: 'Generate transcript',
    },
    position: { x: 250, y: 68 },
  },
  {
    id: '2b',
    data: {
      label: 'Add yiddish slang',
    },
    position: { x: 250, y: 140 },
  },
  {
    id: '3',
    data: {
      label: 'Phonetics',
    },
    position: { x: 150, y: 230 },
  },
  {
    id: '4',
    data: {
      label: 'Speech',
    },
    position: { x: 350, y: 230 },
  },
  {
    id: '5',
    type: 'output',
    data: {
      label: 'Play animation',
    },
    position: { x: 250, y: 330 },
  },
];

export const edges = [
  {
    id: 'e1-2a',
    source: '1',
    target: '2a',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e2a-2b',
    source: '2a',
    target: '2b',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e2b-3',
    source: '2b',
    target: '3',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e2b-4',
    source: '2b',
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
