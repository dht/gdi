import React from 'react';
import {
    Column,
    Container,
    Tab,
    Color,
    Title,
    Subtitle,
} from './VerticalTabs.style';
import classnames from 'classnames';
export type VerticalTabsProps = {
    selectedNodeId: string;
    nodes: INodeWithColor[];
    onSelectNode: (nodeId: string) => void;
};

export function VerticalTabs(props: VerticalTabsProps) {
    const { selectedNodeId, nodes } = props;

    function renderTab(item: any) {
        const className = classnames('item', {
            selected: selectedNodeId === item.id,
        });

        return (
            <Tab
                key={item.id}
                className={className}
                onClick={() => props.onSelectNode(item.id)}
            >
                <Color style={{ backgroundColor: item.color }} />
                <Column>
                    <Title>{item.id}</Title>
                    <Subtitle>{item.nodeType}</Subtitle>
                </Column>
            </Tab>
        );
    }

    function renderTabs() {
        return nodes.map((item: any) => renderTab(item));
    }

    return (
        <Container
            className='VerticalTabs-container'
            data-testid='VerticalTabs-container'
        >
            {renderTabs()}
        </Container>
    );
}

export default VerticalTabs;
