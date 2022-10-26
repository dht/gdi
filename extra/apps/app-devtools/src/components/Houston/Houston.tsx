import React from 'react';
import { Container } from './Houston.style';
import ReactFlow, {
    addEdge,
    MiniMap as MiniMapFlow,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
} from 'react-flow-renderer/nocss';
import {
    nodes as initialNodes,
    edges as initialEdges,
} from './initial-elements';
import './theme-dark.css';

export type HoustonProps = {};

const onInit = (reactFlowInstance: any) =>
    console.log('flow loaded:', reactFlowInstance);

export function Houston(_props: HoustonProps) {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = (params: any) =>
        setEdges((eds: any) => addEdge(params, eds));

    return (
        <Container
            className='Houston-container'
            data-testid='Houston-container'
        >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={onInit}
                fitView
                attributionPosition='top-right'
            >
                <Controls />
                <MiniMap />
                <Background color='#ccc' gap={16} />
            </ReactFlow>
        </Container>
    );
}

function MiniMap() {
    function getNodeStrokeColor(n: any) {
        if (n.style?.background) return n.style.background;
        if (n.type === 'input') return '#0041d0';
        if (n.type === 'output') return '#ff0072';
        if (n.type === 'default') return '#1a192b';

        return '#334';
    }

    function getNodeColor(n: any) {
        if (n.style?.background) return n.style.background;
        return '#334';
    }

    return (
        <MiniMapFlow
            nodeStrokeColor={getNodeStrokeColor}
            nodeColor={getNodeColor}
            nodeBorderRadius={2}
        />
    );
}

export default Houston;
