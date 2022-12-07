import React, { useContext } from 'react';
import { DemoMode } from '@gdi/web-ui';
import { PlatformContext } from '../core/Platform.context';

type DemoModeContainerProps = {};

export function DemoModeContainer(_props: DemoModeContainerProps) {
    const { demoMode } = useContext(PlatformContext).state;

    if (!demoMode) {
        return null;
    }

    return <DemoMode />;
}

export default DemoModeContainer;
