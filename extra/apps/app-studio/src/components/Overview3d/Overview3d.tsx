import React, { useEffect } from 'react';
import { BabylonScene, startRender, loadBoard } from 'isokit';
import {
    Content,
    Patch,
    Resolution,
    Wrapper,
    WrapperBackground,
} from './Overview3d.style';
import { invokeEvent } from 'shared-base';
import { StudioLogo } from '../StudioLogo/StudioLogo';
import { useMeasure, useWindowSize } from 'react-use';
import { Triangles } from '@gdi/web-ui';

export type Overview3dProps = {
    board: IBoardConfig;
    onNudgeBoard: (delta: number) => void;
};

export function Overview3d(props: Overview3dProps) {
    const { board } = props;
    const { width, height } = useWindowSize();

    useEffect(() => {
        invokeEvent('load_babylonjs_scene', () => {
            loadBoard(board);
            startRender();
        });
    }, [board]);

    return (
        <Wrapper
            className='Overview3d-wrapper'
            data-testid='Overview3d-wrapper'
        >
            <Patch />

            <Overview3dBackground board={board} />

            <Content>
                <BabylonScene />
            </Content>

            <Resolution>
                {width} x {height}
            </Resolution>

            <StudioLogo
                onPrevious={() => props.onNudgeBoard(-1)}
                onNext={() => props.onNudgeBoard(+1)}
                boardId={board?.identifier ?? ''}
            />
        </Wrapper>
    );
}

export function Overview3dBackground(props: any) {
    const { board } = props;
    const { backgroundType, backgroundValues } = board ?? {};
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();

    if (backgroundType !== 'triangles') {
        return null;
    }

    const { paletteIndex } = backgroundValues ?? {};

    return (
        <WrapperBackground ref={ref}>
            <Triangles
                width={width}
                height={height}
                paletteIndex={paletteIndex}
            />
        </WrapperBackground>
    );
}

export default Overview3d;
