import { getCurrentWeek } from '@gdi/ui';

export const parseCellChange = (change: Json) => {
  const output = { ...change };

  const { id, tags, tier, amount, week } = output;

  if (id) {
    delete output['id'];
  }

  if (tier) {
    output['tier'] = parseInt(tier, 10);
  }

  if (amount) {
    output['amount'] = parseFloat(amount);
  }

  const regex = /^(\+|-)(\d+)$/;

  if (week) {
    if (week === '0') {
      output['week'] = getCurrentWeek();
    } else if (regex.test(week)) {
      const [, sign, num] = week.match(regex);
      output['week'] = getCurrentWeek() + (sign === '+' ? parseInt(num) : -parseInt(num));
    } else {
      output['week'] = parseInt(week, 10);
    }
  }

  if (tags) {
    output['tags'] = tags.split(',').map((i: string) => i.trim());
  }

  return output;
};
