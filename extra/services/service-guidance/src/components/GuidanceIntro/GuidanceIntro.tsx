import React from 'react';
import { Button, TabbedPages } from '@gdi/web-ui';
import { Actions, Content, H1, P, Wrapper } from './GuidanceIntro.style';
import { tabs } from '../../data/data.tabs';

export type GuidanceIntroProps = {
    callbacks: {
        onGetStarted: () => void;
    };
};

export function GuidanceIntro(props: GuidanceIntroProps) {
    const { callbacks } = props;

    return (
        <Wrapper
            className='GuidanceIntro-wrapper'
            data-testid='GuidanceIntro-wrapper'
        >
            <TabbedPages
                avatarUrl={'https://static-b9ebe.web.app/Logo.jpg'}
                tabs={tabs}
                selectedTabId='intro'
                paletteIndex={8}
                topHeight='200px'
            >
                <Content>
                    <H1>
                        <img src='/welcome4.png' />
                    </H1>
                    <P>
                        This step-by-step wizard will customize the Admin UI for
                        your business / project
                    </P>
                    <Actions>
                        <Button
                            title='Start wizard'
                            primary
                            onClick={callbacks.onGetStarted}
                        />
                    </Actions>
                </Content>
            </TabbedPages>
        </Wrapper>
    );
}

export default GuidanceIntro;
