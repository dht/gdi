import React from 'react';
import { Wrapper } from './ZoomBuildDevice.style';

export type ZoomBuildDeviceProps = {};

export function ZoomBuildDevice(_props: ZoomBuildDeviceProps) {
    return (
        <Wrapper
            className='ZoomBuildDevice-wrapper'
            data-testid='ZoomBuildDevice-wrapper'
        >
            ZoomBuildDevice
        </Wrapper>
    );
}

export default ZoomBuildDevice;
