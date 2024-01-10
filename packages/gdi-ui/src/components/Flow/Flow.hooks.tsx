import { useEffect, useMemo } from 'react';
import { addEdge, useEdgesState, useNodesState } from 'reactflow';
import { invokeEvent } from 'shared-base';
import { InData, OutData } from './Flow.types';

type Callbacks = {
  callbacks: {
    onConnect: (params: any) => void;
    onInit: (reactFlowInstance: any) => void;
    onNodesChange: (nodes: any) => void;
    onEdgesChange: (edges: any) => void;
    onClick: (node: any) => void;
    onDoubleClick: (node: any) => void;
  };
};

export function useNodes(inData: InData): OutData & Callbacks {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const callbacks = useMemo(() => {
    return {
      onConnect: (params: any) => setEdges((eds) => addEdge(params, eds)),
      onInit: (reactFlowInstance: any) => {
        // console.log('flow loaded:', reactFlowInstance),
      },
      onNodesChange,
      onEdgesChange,
      onClick: (node: any) => {
        invokeEvent('flow', node);
      },
      onDoubleClick: (node: any) => {
        invokeEvent('flow', node);
      },
    };
  }, [edges, nodes]);

  useEffect(() => {
    const { nodes = [], edges = [] } = inData ?? {};

    const edgesParsed = edges.map((edge) => {
      return {
        id: edge.id,
        source: edge.source,
        target: edge.target,
      };
    });

    const nodesParsed = nodes.map((node) => {
      return {
        id: node.id,
        type: node.type,
        data: node.config,
        position: node.position,
      };
    });

    setNodes(nodesParsed as any);
    setEdges(edgesParsed);
  }, [inData]);

  return {
    callbacks,
    nodes,
    edges,
  };
}
