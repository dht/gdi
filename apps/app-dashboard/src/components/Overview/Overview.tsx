import React from 'react';
import { Container, Content, Header } from './Overview.style';
import { YourBusiness } from '../YourBusiness/YourBusiness';
import { Clock } from '../Clock/Clock';
import { Stats } from '../Stats/Stats';
import { ScreenLoader } from '@gdi/web-ui';

export type OverviewProps = {
    stats: IStats;
    callbacks: {
        onClick: (stat: Stat, withShift?: boolean) => void;
        onNavigate: (stat: Stat) => void;
    };
    isLoading: boolean;
};

export function Overview(props: OverviewProps) {
    const { stats, callbacks, isLoading } = props;

    function renderContent() {
        if (isLoading) {
            return <ScreenLoader transparent />;
        }

        return <Stats stats={stats} callbacks={callbacks} />;
    }

    return (
        <Container
            className='Overview-container'
            data-testid='Overview-container'
        >
            <Header>
                <YourBusiness text={'My Business'} fontFamily='Inter' />
                <Clock />
            </Header>
            <Content>{renderContent()}</Content>
        </Container>
    );
}

export default Overview;
