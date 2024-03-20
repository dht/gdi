import { getCurrentWeek } from '@gdi/ui';
import { format } from '@gdi/ui';

export const parseCellChange = (change: Json) => {
  const output = { ...change };

  const { id, tags, tier, amount, week, date, startTime, endTime } = output;

  if (id) {
    delete output['id'];
  }

  if (tier) {
    output['tier'] = parseInt(tier, 10);
  }

  if (amount) {
    output['amount'] = parseFloat(amount.replace(/,/g, ''));
  }

  if (date) {
    let newDate = format.date.fromParts(date);
    output['date'] = newDate;
    output['week'] = format.date.weekOfYear(newDate);
  }

  if (startTime) {
    const delta = parseDelta(startTime);

    if (!delta.isDelta) {
      output['startTime'] = format.time.fromParts(startTime);
    } else {
      output['startTime'] = format.time.fromDelta(delta.value, 15);
    }
  }

  if (endTime) {
    const delta = parseDelta(startTime);

    if (!delta.isDelta) {
      output['endTime'] = format.time.fromParts(endTime);
    } else {
      output['startTime'] = format.time.fromDelta(delta.value, 15);
    }
  }

  if (week) {
    const delta = parseDelta(week);

    if (delta.isDelta) {
      output['week'] = getCurrentWeek() + delta.value;
    } else {
      output['week'] = parseInt(week, 10);
    }

    if (week === '0') {
      output['week'] = getCurrentWeek();
    }
  }

  if (tags) {
    output['tags'] = tags.split(',').map((i: string) => i.trim());
  }

  return output;
};

export const parseDelta = (str: string) => {
  const output = {
    isDelta: false,
    value: 0,
  };

  try {
    const regex = /^(\+|-)(\d+)$/;
    const match = str.match(regex);
    if (!match) {
      return output;
    }

    const [, sign, num] = match;
    output.isDelta = true;
    output.value = sign === '+' ? parseInt(num) : -parseInt(num);

    return output;
  } catch (err) {
    return output;
  }
};
