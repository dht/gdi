import { allData } from '../../config/configs.data';
import { Json } from '../../types';
import { Id } from '../Base.style';
import { Wrapper } from './Section.style';
import { allSections } from './_parts';

export type SectionProps = {
  section: Json;
};

export function Section(props: SectionProps) {
  const { section } = props;
  const { id, type } = section;

  const Cmp = allSections[type];
  const data = allData[id];

  if (!Cmp) {
    return null;
  }

  return (
    <Wrapper className='Section-wrapper' data-testid='Section-wrapper'>
      <Cmp data={data} />
    </Wrapper>
  );
}

export default Section;
