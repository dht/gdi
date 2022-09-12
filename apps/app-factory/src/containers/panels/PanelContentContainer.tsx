import React, { useCallback, useContext, useMemo } from 'react';
import Content from '../../components/Content/Content';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../../store';

export type ContentContainerProps = {};

export const PanelContentContainer = (props: ContentContainerProps) => {
    const dispatch = useDispatch();

    return <Content />;
};
