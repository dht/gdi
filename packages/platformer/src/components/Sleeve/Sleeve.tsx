import React, { Suspense } from 'react';
import { Action } from '../../types';
import { AppContextProvider } from '@gdi/language';
import { useDispatch } from 'react-redux';
import { useMount } from 'react-use';
import { useParams } from 'react-router-dom';
import './Sleeve.scss';
import { LoaderContainer } from './Sleeve.style';
import { Spinner } from '@gdi/web-ui';

type SleeveProps = {
    appId: string;
    component: React.FC<any>;
    title?: string;
    props?: any;
    currentIdsActionCreator?: (change: Json) => Action;
};

export function Sleeve(props: SleeveProps) {
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
            <Suspense fallback={<Loader />}>
                <React.Fragment>
                    <Cmp {...(props.props ?? {})} />
                </React.Fragment>
            </Suspense>
        </AppContextProvider>
    );
}

function Loader() {
    return (
        <LoaderContainer>
            <Spinner size='medium' color='gold' delay={500} />
        </LoaderContainer>
    );
}

export default Sleeve;
