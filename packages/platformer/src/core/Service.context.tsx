import React, { useContext, useMemo } from 'react';
import { createContext } from 'react';
import { IServiceConfig, IServiceState } from '../types';
import { PlatformContext } from './Platform.context';
import { useSetState } from 'react-use';

type ServiceContextProps = {
    config: IServiceConfig;
};

type IServiceContext = {
    patchContext: (change: Partial<IServiceState>) => void;
    state: IServiceState;
};

const initialValue: IServiceContext = {
    patchContext: () => {},
    state: {
        serviceId: '',
        serviceName: '',
        description: '',
        imageUrl: '',
        apiUrl: '',
        $status: () => 'INITIAL',
        patchStatus: () => ({ type: '' }),
    },
};

export const ServiceContext = createContext<IServiceContext>(initialValue);

export const ServiceContextProvider = (
    props: WithChildren<ServiceContextProps>
) => {
    const { config } = props;

    const platform = useContext(PlatformContext);

    const [state, patchContext] = useSetState<IServiceState>({
        ...initialValue.state,
        ...config,
    });

    const value = useMemo(
        () => ({
            state,
            patchContext,
        }),
        [state]
    );

    return (
        <ServiceContext.Provider value={value}>
            {props.children}
        </ServiceContext.Provider>
    );
};

type WithChildren<T> = T & {
    children?: JSX.Element | JSX.Element[];
};
