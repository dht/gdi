import { IBlock } from '@gdi/web-ui';
import React from 'react';
import { Container } from './App.style';
import { Chair } from '../Chair/Chair';
import { blocks } from '../../bootstrap';

export function App() {
    function renderBlock(block: IBlock, index) {
        return (
            <Chair
                key={block.id}
                component={block.component}
                blockInfo={block.info}
                sequence={index}
            />
        );
    }

    function renderBlocks() {
        return Object.values(blocks).map((block: IBlock, index) =>
            renderBlock(block, index)
        );
    }

    return (
        <Container className='App-container' data-testid='App-container'>
            {renderBlocks()}
        </Container>
    );
}

export default App;
