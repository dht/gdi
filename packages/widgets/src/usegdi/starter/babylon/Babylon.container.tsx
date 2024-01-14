import { useDispatch } from '@gdi/store-base';
import { selectors } from '@gdi/store-iso';
import { useEffect, useState } from 'react';
import { useSaga } from '../../../helpers/useSaga';
import { Babylon } from './Babylon';
import { useSelector } from 'react-redux';

export type BabylonContainerProps = {};

export const BabylonContainer = (_props: BabylonContainerProps) => {
  const dispatch = useDispatch();

  useSaga('widgets.babylon');

  useEffect(() => {
    dispatch({ type: 'BABYLON_BOOTSTRAP' });
  }, []);

  return <Babylon isLoading={false} />;
};

export default BabylonContainer;
