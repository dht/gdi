import { dayjs } from './_base';

export const time = {
  parts: (date: string | number | Date) => {
    const instance = dayjs(date);
    const hour = instance.hour();
    const minutes = instance.minute();
    const seconds = instance.second();
    const millis = instance.millisecond();

    return {
      hour,
      hourLz: lz(hour),
      minutes,
      minutesLz: lz(minutes),
      seconds,
      secondsLz: lz(seconds),
      millis,
      millisLz: lz(millis),
    };
  },
  fromDelta: (delta: number, roundToMinutes: number) => {
    const current = time.parts(Date.now());

    // hours
    if (Math.abs(delta) < 10) {
      const hours = current.hour + delta;
      return `${lz(hours)}:${current.minutes}`;
    }

    // minutes
    let minutes = current.minutes + delta;
    let hours = current.hour;

    if (minutes < 0) {
      minutes += 60;
      hours--;
    }

    if (minutes >= 60) {
      minutes -= 60;
      hours++;
    }

    if (roundToMinutes) {
      minutes = Math.round(minutes / roundToMinutes) * roundToMinutes;
    }

    return `${hours}:${lz(minutes)}`;
  },
  fromParts: (str: string) => {
    try {
      const current = time.parts(Date.now());
      const parts = str.split(':');
      const partsInt = parts.map((i) => parseInt(i, 10));

      // 5:10 => 05:10
      if (parts.length >= 2) {
        return `${lz(partsInt[0])}:${lz(partsInt[1])}`;
      }

      // 0 => current time
      if (parts[0] === '0') {
        return `${current.hour}:${current.minutes}`;
      }

      // 14 => 14:00
      return `${lz(partsInt[0])}:00`;
    } catch (e) {
      return str;
    }
  },
};

const lz = (num: number) => {
  return num < 10 ? `0${num}` : num;
};
