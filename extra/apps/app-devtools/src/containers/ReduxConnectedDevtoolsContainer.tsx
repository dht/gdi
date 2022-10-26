import React, { useMemo } from 'react';
import ReduxConnectedDevtools from '../components/ReduxConnectedDevtools/ReduxConnectedDevtools';
import { getConnectedStore } from 'redux-connected';

export type ReduxConnectedDevtoolsProps = {};

export function ReduxConnectedDevtoolsContainer(
    _props: ReduxConnectedDevtoolsProps
) {
    const connectedStore = useMemo(() => getConnectedStore(), []);
    return <ReduxConnectedDevtools connectedStore={connectedStore} />;
}

export default ReduxConnectedDevtoolsContainer;
