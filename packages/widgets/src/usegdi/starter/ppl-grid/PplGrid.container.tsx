import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { Loader, useFetch } from '@gdi/ui';
import { invokeEvent } from 'shared-base';
import { useSagas } from '../../../helpers/useSaga';
import { BASE_URL, PplGrid } from './PplGrid';

export type PplGridContainerProps = {};

export function PplGridContainer(_props: PplGridContainerProps) {
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const { personId } = currentIds;

  const [data, { isLoading }] = useFetch(`${BASE_URL}/ppl-jsons/index.json?version=2`);

  useSagas(['widgets.pplGrid']);

  const onChange = (personId: string) => {
    dispatch(actions.currentIds.patch({ personId }));
  };

  if (isLoading) {
    return <Loader />;
  }

  return <PplGrid data={data} personId={personId} onChange={onChange} />;
}

export default PplGridContainer;
