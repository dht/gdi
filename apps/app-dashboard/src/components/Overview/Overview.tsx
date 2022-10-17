import React from 'react';
import { Container, Content, Header } from './Overview.style';
import { YourBusiness } from '../YourBusiness/YourBusiness';
import { Clock } from '../Clock/Clock';
import { Stats } from '../Stats/Stats';

export type OverviewProps = {
    stats: IStats;
    callbacks: {
        onClick: (stat: Stat, withShift?: boolean) => void;
        onNavigate: (stat: Stat) => void;
    };
};

export function Overview(props: OverviewProps) {
    const { stats, callbacks } = props;

    return (
        <Container
            className='Overview-container'
            data-testid='Overview-container'
        >
            <Header>
                <YourBusiness text={'My Business'} fontFamily='Inter' />
                <Clock />
            </Header>
            <Content>
                <Stats stats={stats} callbacks={callbacks} />
            </Content>
        </Container>
    );
}

export default Overview;
