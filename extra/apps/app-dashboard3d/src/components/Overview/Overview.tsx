import React from 'react';
import {
    Bk,
    Column,
    Wrapper,
    Content,
    Fg,
    Header,
    Resolution,
} from './Overview.style';
import { OverviewBar } from '../OverviewBar/OverviewBar';
import { ScreenLoader, TrianglesBk } from '@gdi/web-ui';
import { Stats } from '../Stats/Stats';
import { useMeasure } from 'react-use';

export type OverviewProps = {
    accountName: string;
    stats: IStats;
    callbacks: {
        onClick: (stat: IStat, withShift?: boolean) => void;
        onNavigate: (stat: IStat) => void;
        onAccountChange: () => void;
    };
    isLoading: boolean;
    children: JSX.Element;
};

export function Overview(props: OverviewProps) {
    const { stats = {}, callbacks, isLoading, accountName } = props;
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();

    function renderStats() {
        if (isLoading) {
            return <ScreenLoader spinnerColor='#22223367' transparent />;
        }

        return <Stats stats={stats} callbacks={callbacks} />;
    }

    return (
        <Wrapper
            className='Overview-wrapper'
            data-testid='Overview-wrapper'
            ref={ref}
        >
            <TrianglesBk>
                <Header>
                    <OverviewBar
                        accountName={accountName}
                        onAccountChange={callbacks.onAccountChange}
                    />
                </Header>

                <Content>
                    <Column>{props.children}</Column>
                    <Column>{renderStats()}</Column>
                </Content>

                <Resolution>
                    {width} x {height}px
                </Resolution>
            </TrianglesBk>
        </Wrapper>
    );
}

export default Overview;
