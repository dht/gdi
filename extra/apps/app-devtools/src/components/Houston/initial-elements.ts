import React from 'react';

export const nodes = [
    {
        id: '1',
        type: 'input',
        position: { x: 250, y: 0 },
        data: {
            label: 'Another default node',
        },
    },
    {
        id: '2',
        position: { x: 100, y: 100 },
        data: {
            label: 'Another default node',
        },
    },
    {
        id: '3',
        position: { x: 400, y: 100 },
        data: {
            label: 'Another default node',
        },
    },
    {
        id: '4',
        position: { x: 250, y: 200 },
        data: {
            label: 'Another default node',
        },
    },
    {
        id: '5',
        data: {
            label: 'Node id: 5',
        },
        position: { x: 250, y: 325 },
    },
    {
        id: '6',
        type: 'output',
        data: {
            label: 'Another default node',
        },
        position: { x: 100, y: 480 },
    },
    {
        id: '7',
        type: 'output',
        data: { label: 'Another output node' },
        position: { x: 400, y: 450 },
    },
];

export const edges = [
    { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
    { id: 'e1-3', source: '1', target: '3' },
    {
        id: 'e3-4',
        source: '3',
        target: '4',
        animated: true,
        label: 'animated edge',
    },
    {
        id: 'e4-5',
        source: '4',
        target: '5',
        label: 'edge with arrow head',
        markerEnd: {
            // type: MarkerType.ArrowClosed,
        },
    },
    {
        id: 'e5-6',
        source: '5',
        target: '6',
        type: 'smoothstep',
        label: 'smooth step edge',
    },
    {
        id: 'e5-7',
        source: '5',
        target: '7',
        type: 'step',
        label: 'a step edge',
        animated: true,
    },
];
