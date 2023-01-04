import React from 'react';
import { Button, TabbedPages } from '@gdi/web-ui';
import {
    Actions,
    Column,
    Content,
    Row,
    Wrapper,
} from './GuidanceRanking.style';
import { BusinessWheel } from '../BusinessWheel/BusinessWheel';
import { Question } from '../Question/Question';
import { tabs } from '../../data/data.tabs';

export type GuidanceRankingProps = {};

export function GuidanceRanking(props: GuidanceRankingProps) {
    return (
        <Wrapper
            className='GuidanceRanking-wrapper'
            data-testid='GuidanceRanking-wrapper'
        >
            <TabbedPages
                avatarUrl={'https://static-b9ebe.web.app/Logo.jpg'}
                tabs={tabs}
                selectedTabId='ranking'
                paletteIndex={8}
                topHeight='200px'
            >
                <Content>
                    <Row>
                        <Column flex={2}>
                            <Question />
                        </Column>
                        <Column flex={3}>
                            <BusinessWheel />
                        </Column>
                    </Row>
                    <Row>
                        <Actions>
                            <Button title='Next' primary />
                        </Actions>
                    </Row>
                </Content>
            </TabbedPages>
        </Wrapper>
    );
}

export default GuidanceRanking;
