import React from 'react';
import { Bk, Column, Container, Content, Fg, Header } from './Overview.style';
import { OverviewBar } from '../OverviewBar/OverviewBar';
import { ScreenLoader } from '@gdi/web-ui';
import { Stats } from '../Stats/Stats';
import { Triangles } from '../Triangles/Triangles';
import { useMeasure } from 'react-use';

export type OverviewProps = {
    stats: IStats;
    callbacks: {
        onClick: (stat: Stat, withShift?: boolean) => void;
        onNavigate: (stat: Stat) => void;
    };
    isLoading: boolean;
    children: JSX.Element;
};

export function Overview(props: OverviewProps) {
    const { stats = {}, callbacks, isLoading } = props;
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();

    function renderStats() {
        if (isLoading) {
            return <ScreenLoader spinnerColor='#22223367' transparent />;
        }

        return <Stats stats={stats} callbacks={callbacks} />;
    }

    return (
        <Container
            className='Overview-container'
            data-testid='Overview-container'
            ref={ref}
        >
            <Bk>
                <Triangles width={width} height={height} />
            </Bk>
            <Fg>
                <Header>
                    <OverviewBar />
                </Header>

                <Content>
                    <Column>{props.children}</Column>
                    <Column>{renderStats()}</Column>
                </Content>
            </Fg>
        </Container>
    );
}

export default Overview;
