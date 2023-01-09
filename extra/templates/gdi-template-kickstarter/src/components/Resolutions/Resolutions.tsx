import React from 'react';
import { IFrame, Label, Resolution, Wrapper } from './Resolutions.style';

export type ResolutionsProps = {
    data: Json;
};

export function Resolutions(props: ResolutionsProps) {
    const { data } = props;

    function renderResolution(resolution: Json) {
        const { screenWidth, screenHeight, grid } = resolution;
        const [sx, sy] = grid;

        const styleWrapper = {
            width: screenWidth + 'px',
            height: screenHeight + 'px',
            gridArea: areaDimension(sx, sy, screenWidth, screenHeight),
        };

        const styleIFrame = {
            width: screenWidth + 'px',
            height: screenHeight + 'px',
        };

        return (
            <Resolution
                key={resolution.id}
                className='resolution'
                style={styleWrapper}
            >
                <Label>
                    {screenWidth}x{screenHeight}
                </Label>

                <IFrame style={styleIFrame} src='http://10.100.102.26:3001/' />
            </Resolution>
        );
    }

    function renderResolutions() {
        return Object.values(data)
            .filter((resolution: Json) => !resolution.hidden)
            .map((resolution: Json) => renderResolution(resolution));
    }

    return (
        <Wrapper
            className='Resolutions-wrapper'
            data-testid='Resolutions-wrapper'
        >
            {renderResolutions()}
        </Wrapper>
    );
}

export const area = (sy: number, sx: number, ey: number, ex: number) => {
    return [sy, sx, ey, ex].join('/');
};

const SIZE = 25;

export const areaDimension = (
    sx: number,
    sy: number,
    screenWidth: number,
    screenHeight: number
) => {
    const dx = Math.round(screenWidth / SIZE);
    const dy = Math.round(screenHeight / SIZE);

    return area(sy, sx, sy + dy, sx + dx);
};

export default Resolutions;
