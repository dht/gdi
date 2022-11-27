import React, { useCallback, useContext, useMemo } from 'react';
import Content from '../../components/Content/Content';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../../store';
import { FlexPropertiesContainer } from '../FlexPropertiesContainer';

export type ContentContainerProps = {
    flex?: boolean;
};

export const PanelContentContainer = (props: ContentContainerProps) => {
    return <FlexPropertiesContainer />;
};

export default PanelContentContainer;
