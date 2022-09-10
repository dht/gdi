import React from 'react';
import DesignerTree from '../../components/DesignerTree/DesignerTree';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../../store';

export const DesignerTreeContainer = () => {
    const layout = useSelector(selectors.base.$layout);

    return <DesignerTree layout={layout} />;
};
