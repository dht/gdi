import React from 'react';
import { Action } from '../../types';
import { AppContextProvider } from '@gdi/language';
import { useDispatch } from 'react-redux';
import { useMount } from 'react-use';
import { useParams } from 'react-router-dom';
import './Wrapper.scss';

type WrapperProps = {
    appId: string;
    component: React.FC<any>;
    props: any;
    currentIdsActionCreator: (change: Json) => Action;
};

export function Wrapper(props: WrapperProps) {
    const { appId, component: Cmp, currentIdsActionCreator } = props;
    const dispatch = useDispatch();
    const params: Json = useParams();

    useMount(() => {
        if (!currentIdsActionCreator) {
            return;
        }

        delete params['*'];
        if (Object.keys(params).length > 0) {
            dispatch(currentIdsActionCreator(params));
        }
    });

    return (
        <AppContextProvider appId={appId}>
            <React.Fragment>
                <Cmp {...props.props} />
            </React.Fragment>
        </AppContextProvider>
    );
}

export default Wrapper;
