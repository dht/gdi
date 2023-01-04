import React from 'react';
import {
    Actions,
    Column,
    Content,
    Row,
    Wrapper,
} from './GuidanceBusinessInfo.style';
import { Button, TabbedPages } from '@gdi/web-ui';
import { tabs } from '../../data/data.tabs';

export type GuidanceBusinessInfoProps = {};

export function GuidanceBusinessInfo(_props: GuidanceBusinessInfoProps) {
    return (
        <Wrapper
            className='GuidanceBusinessInfo-wrapper'
            data-testid='GuidanceBusinessInfo-wrapper'
        >
            <TabbedPages
                avatarUrl={'https://static-b9ebe.web.app/Logo.jpg'}
                tabs={tabs}
                selectedTabId='category'
                paletteIndex={8}
                topHeight='200px'
            >
                <Content>
                    <Row>
                        <Column>info2</Column>
                        <Column flex={1}></Column>
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

export default GuidanceBusinessInfo;
