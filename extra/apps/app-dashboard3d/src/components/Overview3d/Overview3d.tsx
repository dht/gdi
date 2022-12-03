import React, { useState } from 'react';
import { OverviewBar } from '../OverviewBar/OverviewBar';
import { ScreenLoader, TrianglesBk } from '@gdi/web-ui';
import { Stats } from '../Stats/Stats';
import { useMeasure } from 'react-use';
import {
    Bk,
    Column,
    Wrapper,
    Content,
    Fg,
    Header,
    Resolution,
} from './Overview3d.style';
import { BabylonScene } from './Scene';
import { onSceneReady } from './Overview3d.extra';

export type Overview3dProps = {
    accountName: string;
    stats: IStats;
    callbacks: {
        onClick: (stat: Stat, withShift?: boolean) => void;
        onNavigate: (stat: Stat) => void;
        onAccountChange: () => void;
    };
    isLoading: boolean;
};

export function Overview3d(props: Overview3dProps) {
    const { callbacks, accountName } = props;
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();
    const [palette, setPalette] = useState<string[]>();

    function onLoadTriangles(value: string[]) {
        setPalette(value);
    }

    return (
        <Wrapper
            className='Overview3d-wrapper'
            data-testid='Overview3d-wrapper'
            ref={ref}
        >
            <TrianglesBk onLoad={onLoadTriangles}>
                <Header>
                    <OverviewBar
                        accountName={accountName}
                        onAccountChange={callbacks.onAccountChange}
                    />
                </Header>

                <Content>
                    {palette && (
                        <BabylonScene
                            onSceneReady={(scene: BABYLON.Scene) =>
                                onSceneReady(scene, palette)
                            }
                        />
                    )}
                </Content>

                <Resolution>
                    {width} x {height}px
                </Resolution>
            </TrianglesBk>
        </Wrapper>
    );
}

export default Overview3d;
