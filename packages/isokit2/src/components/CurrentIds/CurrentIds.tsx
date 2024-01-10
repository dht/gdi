import ParamsTable from '../ParamsTable/ParamsTable';
import { filterKeys } from './CurrentIds.data';
import { Wrapper } from './CurrentIds.style';

export type CurrentIdsProps = {
  data: Json;
};

export function CurrentIds(props: CurrentIdsProps) {
  const { data } = props;

  return (
    <Wrapper className='CurrentIds-wrapper' data-testid='CurrentIds-wrapper'>
      <ParamsTable
        label={data.bitId}
        value={data}
        filterKeys={filterKeys}
        onClick={() => {}}
        onKeyClick={() => {}}
        onValueClick={() => {}}
        wide
      />
    </Wrapper>
  );
}

export default CurrentIds;
