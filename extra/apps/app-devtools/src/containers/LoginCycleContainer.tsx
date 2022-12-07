import React, { useCallback, useReducer } from 'react';
import {
    actions,
    lifecycleActions,
    reducer,
    steps,
} from './LoginCycleContainer.data';
import { useCustomEvent } from '@gdi/hooks';
import { useDispatch } from 'react-redux';
import { Lifecycle } from '@gdi/web-ui';

type LoginCycleContainerProps = {
    googleClientId: string;
};

export const LoginCycleContainer = (props: LoginCycleContainerProps) => {
    const dispatch = useDispatch();
    const [data, dispatchLocal] = useReducer(reducer, steps);

    useCustomEvent('LOGIN_EVENT', (data: Json) => {
        dispatchLocal(actions.patch(data.id, data));
    });

    const onAction = useCallback((id: string) => {
        switch (id) {
            case 'invalidateAccessToken':
                localStorage.removeItem('MAIN_ACCESS_TOKEN');
                document.location.reload();
                break;
            case 'invalidateRefreshToken':
                localStorage.removeItem('MAIN_REFRESH_TOKEN');
                document.location.reload();
                break;
            case 'logoutSilent':
                localStorage.removeItem('MAIN_ACCESS_TOKEN');
                localStorage.removeItem('MAIN_REFRESH_TOKEN');
                document.location.reload();
                break;
            case 'logout':
                dispatch({ type: 'LOGOUT' });
                break;
        }
    }, []);

    return (
        <Lifecycle
            title='Global Login'
            stages={data as any}
            devMode={true}
            onAction={onAction}
            actions={lifecycleActions}
        />
    );
};

export default LoginCycleContainer;
