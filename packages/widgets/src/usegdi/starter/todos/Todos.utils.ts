import { getCurrentWeek } from '@gdi/ui';

export const parseTodosChange = (change: Json) => {
  const output = { ...change };

  const { id, week } = output;

  if (id) {
    delete output['id'];
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

  return output;
};
