import React, { useState } from 'react';
import { useMount } from 'react-use';
import { ServiceContextProvider } from '../../core/Service.context';
import { IServiceConfig } from '../../types';
import Sleeve from '../Sleeve/Sleeve';

export type ServiceSleeveProps = {
    appId: string;
    component: React.FC<any>;
    title?: string;
    props?: any;
    identifier?: string;
    currentIdsActionCreator?: (change: Json) => Action;
    serviceConfig: IServiceConfig;
};

export function ServiceSleeve(props: ServiceSleeveProps) {
    const { serviceConfig } = props;
    const [isReady, setIsReady] = useState(false);

    useMount(() => {
        setTimeout(() => {
            setIsReady(true);
        }, 100);
    });

    if (!isReady) {
        return null;
    }

    return (
        <ServiceContextProvider config={serviceConfig}>
            <Sleeve {...props} />
        </ServiceContextProvider>
    );
}

export default ServiceSleeve;
