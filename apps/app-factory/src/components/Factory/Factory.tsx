import React from 'react';
import { IFlexEntity } from 'stores/gdi-store-factory/dist';
import FlexDesigner from '../FlexDesigner/FlexDesigner';
import TopBar from '../TopBar/TopBar';
import { Container } from './Factory.style';

export type FactoryProps = {
    items?: IFlexEntity[];
    selectedItemId: string;
    callbacks: {
        selectEntity: (id: string) => void;
        onViewChange: (viewId: string) => void;
        onSearch: (search?: string) => void;
        onSelectTool?: (toolId: string) => void;
        onTagClick?: (tag: string) => void;
        onTagClear?: () => void;
    };
};

export function Factory(props: FactoryProps) {
    const { items = [], selectedItemId, callbacks } = props;

    return (
        <Container
            className='Factory-container'
            data-testid='Factory-container'
        >
            <TopBar
                search=''
                showTools={true}
                viewMode=''
                callbacks={callbacks}
            />
            <FlexDesigner
                items={items}
                selectedItemId={selectedItemId}
                callbacks={callbacks}
            />
        </Container>
    );
}

export default Factory;
