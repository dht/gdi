import _dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import weekOfYear from 'dayjs/plugin/weekOfYear';

_dayjs.extend(advancedFormat);
_dayjs.extend(relativeTime);
_dayjs.extend(duration);
_dayjs.extend(weekOfYear);

export const dayjs = _dayjs;
