import classnames from 'classnames';
import { Json } from '../../../../types';
import { tiers } from './Tier.data';
import { Item, Wrapper } from './Tier.style';

export type TierProps = {
  value: string[];
  onChange: (value: string) => void;
};

export function Tier(props: TierProps) {
  const { value } = props;

  function renderTier(tier: Json) {
    const { name } = tier;

    const className = classnames('tier', {
      selected: value.includes(tier.id),
    });

    return (
      <Item key={tier.id} className={className} onClick={() => props.onChange(tier.id)}>
        {name}
      </Item>
    );
  }

  function renderTiers() {
    return tiers.map((tier: Json) => renderTier(tier));
  }

  return (
    <Wrapper className='Tier-wrapper' data-testid='Tier-wrapper'>
      {renderTiers()}
    </Wrapper>
  );
}

export default Tier;
