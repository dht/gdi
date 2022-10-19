const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

export const startOfWeek = (date: Date) => {
    return date;
};

export const weekAndDOWToInfo = (
    week: number,
    dayOfWeek: number
): Partial<DateInfo> => {
    const now = new Date();
    const dateWeek = setISOWeek(now, week);
    const dateWeekStart = startOfWeek(dateWeek);
    const date = addDays(dateWeekStart, dayOfWeek);

    return {
        dayOfWeek,
        dayOfYear: getDayOfYear(date),
        week: getISOWeek(date),
        quarter: getQuarter(date),
        dayOfWeekName: days[dayOfWeek],
        dateString: date.toString(),
    };
};

export const dayAbsoluteToInfo = (dayAbsolute: number) => {
    const now = new Date();
    const date = setDayOfYear(now, dayAbsolute);
    const dayOfWeek = getDay(date);

    return {
        dayOfWeek,
        dayOfYear: getDayOfYear(date),
        week: getISOWeek(date),
        quarter: getQuarter(date),
        dayOfWeekName: days[dayOfWeek],
        dateString: date.toString(),
    };
};

export const checkWhetherIsInPast = ({
    day = 0,
    week = 0,
    quarter = 0,
}: {
    day?: number;
    week?: number;
    quarter?: number;
}) => {
    const now = new Date();
    let date = new Date();

    if (quarter) {
        date = setQuarter(date, quarter);
    }

    if (week) {
        date = setISOWeek(date, week);
    }

    if (day) {
        date = setDayOfYear(date, day);
    }

    return date.getTime() <= now.getTime();
};

export const weekToDateText = (week: number) => {
    const date = setISOWeek(new Date(), week);
    const weekStart = startOfWeek(date);
    return format(weekStart, 'd.M');
};

export const dayAbsoluteToDateText = (dayAbsolute: number) => {
    const date = setDayOfYear(new Date(), dayAbsolute);
    return format(date, 'd.M');
};

export const timestamp = () => new Date().getTime();

export const dateFilename = (suffix: string) => {
    return format(new Date(), 'yyyy-MM-dd-') + suffix;
};

export class SimpleDate {
    private date: Date;

    static fromWeek(weekPointer: WeekPointer, dayOfWeek: number = 0) {
        let now = new Date();
        now = setYear(now, weekPointer.year);
        now = setWeek(now, weekPointer.week);
        now = setDay(now, dayOfWeek);
        return new SimpleDate(now);
    }

    static now() {
        return new SimpleDate();
    }

    constructor(date?: Date | string) {
        switch (typeof date) {
            case 'undefined':
                this.date = new Date();
                break;
            case 'string':
                this.date = new Date(date);
                break;
            default:
                this.date = date;
                break;
        }
    }

    addWeeks(weeks: number) {
        this.date = addWeeks(this.date, weeks);
        return this;
    }

    addMinutes(minutes: number) {
        this.date = addMinutes(this.date, minutes);
        return this;
    }

    setDayOfWeek(dayOfWeek: number) {
        this.date = setDay(this.date, dayOfWeek);
        return this;
    }

    setTime(time: string) {
        const [hours, minutes] = time.split(':').map((i) => parseInt(i));
        this.date = setHours(this.date, hours);
        this.date = setMinutes(this.date, minutes);
        return this;
    }

    format(format: string) {
        return '';
    }

    toInfo(): DateInfo {
        const dayOfWeekName = this.format('eeee');
        const dayOfWeekShortName = this.format('eee');
        const yearShort = this.format('yy');
        const week = getWeek(this.date);
        const dayOfWeek = getDay(this.date);
        const weekAndYear = `W${week}-${yearShort}`;
        const hour = this.format('HH:mm');

        const dateStringWeek = `w${week}-d${dayOfWeek}-${yearShort}-${hour}`;

        return {
            dayOfWeek,
            dayOfYear: getDayOfYear(this.date),
            week,
            year: getYear(this.date),
            quarter: getQuarter(this.date),
            hour,
            yearShort,
            dayOfWeekName,
            dayOfWeekShortName,
            weekAndYear,
            dateString: this.format('dd-MM'),
            dateShortString: format(this.date, 'iiii, MMM do'),
            dateStringFull: this.date.toString(),
            dateStringWeek,
            isToday: isToday(this.date),
        };
    }

    isDayTime() {
        return parseInt(this.format('HH')) < 16;
    }

    toText(withHour?: boolean) {
        return withHour
            ? this.format('MMM d, yyyy, H:mm')
            : this.format('yyyy-MM-dd');
    }

    toString() {
        return this.format('yyyy-MM-dd HH:mm:ss');
    }

    value() {
        return this.date;
    }

    timeAgo() {
        return timeAgo(this.date);
    }
}

export const myUTC = () => {
    return -new Date().getTimezoneOffset() / 60;
};

export const calculateUTC = (deltaInMinutes: number) => {
    let utcPlus = Math.round(myUTC() + deltaInMinutes / 60);

    if (utcPlus < -11) {
        utcPlus += 24;
    }

    const sign = utcPlus >= 0 ? '+' : '-';
    const utc = `${sign}${Math.abs(utcPlus)}`;
    const cities = (timezones as any)[utc];
    const randomCity = cities[0];

    const cityImageUrl = `https://appofthebox.web.app/cities/${randomCity}.webp`;
    const radioUrl = (radio as any)[randomCity];

    return {
        alternativeUtc: `UTC${utc}`,
        alternativeCity: randomCity,
        alternativeCityImageUrl: cityImageUrl,
        alternativeRadioUrl: radioUrl,
    };
};

export type WeekPointer = {
    week: number;
    year: number;
    isCurrentWeek?: boolean;
    weekAndYear?: string;
};

type DateInfo = {
    dayOfWeek: number;
    dayOfYear: number;
    week: number;
    year: number;
    yearShort: string;
    quarter: number;
    hour: string;
    dayOfWeekName: string;
    dayOfWeekShortName: string;
    dateString: string;
    dateShortString: string;
    dateStringFull: string;
    weekAndYear: string;
    dateStringWeek: string;
    isToday?: boolean;
};

export const timezones = {
    '-12': ['Christchurch'],
    '-11': ['Pago Pago'],
    '-10': ['Honolulu'],
    '-9': ['French Polynesia'],
    '-8': ['San Francisco'],
    '-7': ['Whitehorse'],
    '-6': ['Austin'],
    '-5': ['New York'],
    '-4': ['Barbados'],
    '-3': ['Buenos Aires'],
    '-2': ['Itamaracá'],
    '-1': ['Santa Cruz'],
    '+0': ['London'],
    '+1': ['Amsterdam'],
    '+2': ['Cairo'],
    '+3': ['Tel-Aviv'],
    '+4': ['Tbilisi'],
    '+5': ['Maldives'],
    '+6': ['Mumbai'],
    '+7': ['Bankok'],
    '+8': ['Beijing'],
    '+9': ['Tokyo'],
    '+10': ['Melbourne'],
    '+11': ['Papa New Guinea'],
    '+12': ['Christchurch'],
};

export const radio = {
    'Pago Pago': 'http://radio.garden/listen/wvuv-103-1-fm/41xZzhTO',
    Honolulu: 'http://radio.garden/listen/radio-98-5-island-fm/Ol16IwzA',
    'French Polynesia': 'http://radio.garden/listen/ouest-fm/C95fTvwp',
    Vancouver: 'http://radio.garden/listen/cfox/kYd8MIrZ',
    'San Francisco': 'http://radio.garden/listen/kpoo-fm-89-5/ZhyqK6kK',
    Whitehorse: 'http://radio.garden/listen/khns/jEB86GY4',
    Denver: 'http://radio.garden/listen/radio-shadow-deep-tracks/zBIyMp55',
    Austin: 'http://radio.garden/listen/austin-blues-radio/_hQCemA1',
    'New York': 'http://radio.garden/listen/soul-cafe-radio/gHzbeiVp',
    Barbados: 'http://radio.garden/listen/y-103-3-fm/RthOQq4O',
    Cairo: 'http://radio.garden/listen/radio-90s-fm/CGj0W1yp',
    'Buenos Aires': 'http://radio.garden/listen/radio-arinfo/Q1MOv09g',
    Itamaracá: 'http://radio.garden/listen/radio-104-9-arraiana-fm/EcrZEliD',
    'Santa Cruz': 'http://radio.garden/listen/radio-union-tenerife/fg1phjAh',
    London: 'http://radio.garden/listen/bbc-radio-4/CO4JBP8X',
    Amsterdam: 'http://radio.garden/listen/musiq1/hyynosL8',
    'Tel-Aviv': 'http://radio.garden/listen/eco99fm/FnF2nzhL',
    Istanbul: 'http://radio.garden/listen/power-tuerk-en-iyiler/QJZitTi_',
    Tbilisi: 'http://radio.garden/listen/relaxwebradio/2CTNaBPB',
    Maldives: 'http://radio.garden/visit/khasab/suj4Lm1u',
    Mumbai: 'http://radio.garden/listen/radio-urja/7YVA8yrB',
    Bankok: 'http://radio.garden/listen/ployradio-thailand/KT4ofnbU',
    Beijing: 'http://radio.garden/listen/cnr-1-voice-of-china/zIDhCGMk',
    Tokyo: 'http://radio.garden/listen/ottava/rDch0y97',
    Melbourne: 'http://radio.garden/listen/gk-international/Ry9m7iE1',
    'Papa New Guinea': 'http://radio.garden/visit/tobelo/ee9bSQR7',
    Christchurch: 'http://radio.garden/listen/the-breeze-fm-93-4/Jp5DQhph',
};

export const timeAgo = (
    date: Date | string | number,
    withSeconds?: boolean
) => {
    try {
        if (typeof date === 'string' || typeof date === 'number') {
            date = new Date(date);
        }

        const now = new Date();

        const duration = intervalToDuration({
            start: date.getTime(),
            end: now.getTime(),
        });

        if (!withSeconds) {
            duration.seconds = 0;
        }

        const output = formatDuration(duration.seconds);

        if (!output) {
            return 'Just now';
        }

        return output + ' ago';
    } catch (_err) {
        return '';
    }
};

export const inTime = (date: Date | string | number, withSeconds?: boolean) => {
    try {
        if (typeof date === 'string' || typeof date === 'number') {
            date = new Date(date);
        }

        const now = new Date();

        if (date < now) {
            return 'Past';
        }

        const duration = intervalToDuration({
            start: date.getTime(),
            end: now.getTime(),
        });

        duration.seconds = 0;

        if (duration.years) {
            duration.months = 0;
            duration.weeks = 0;
            duration.days = 0;
            duration.hours = 0;
            duration.minutes = 0;
        } else if (duration.months) {
            duration.weeks = 0;
            duration.days = 0;
            duration.hours = 0;
            duration.minutes = 0;
        } else if (duration.weeks) {
            duration.days = 0;
            duration.hours = 0;
            duration.minutes = 0;
        } else if (duration.days) {
            if (duration.days > 1) {
                duration.hours = 0;
            }
            duration.minutes = 0;
        }

        const output = formatDuration(duration.seconds);

        if (!output) {
            return 'Just now';
        }

        return 'in ' + output;
    } catch (_err) {
        return '';
    }
};

export const shortDate = (date: Date | string | number) => {
    try {
        if (typeof date === 'string' || typeof date === 'number') {
            date = new Date(date);
        }

        const today = isToday(date);

        if (today) {
            return format(date, 'HH:mm');
        }

        return format(date, 'd-MM HH:mm');
    } catch (_err) {
        return '';
    }
};

export const minutesToDuration = (
    minutesTotal: number,
    workingHoursPerDay: number = 8
) => {
    try {
        const output: string[] = [];

        let memo = minutesTotal;

        const minutesPerDay = workingHoursPerDay * 60;
        const minutesPerWeek = 5 * minutesPerDay;

        const weeks = Math.floor(memo / minutesPerWeek);
        memo -= weeks * minutesPerWeek;

        const days = Math.floor(memo / minutesPerDay);
        memo -= days * minutesPerDay;

        const hours = Math.floor(memo / 60);
        memo -= hours * 60;

        const minutes = Math.ceil(memo);

        if (weeks) {
            output.push(`${weeks}w`);
        }

        if (days) {
            output.push(`${weeks}d`);
        }

        if (hours) {
            output.push(`${weeks}h`);
        }

        if (minutes) {
            output.push(`${minutes}m`);
        }

        return output.join(' ');
    } catch (_err) {
        return '';
    }
};

export const minutesThisX = () => {
    const now = new Date();

    return {
        today: differenceInMinutes(now, startOfDay(now)),
        week: differenceInMinutes(now, startOfWeek(now)),
        month: differenceInMinutes(now, startOfMonth(now)),
        year: differenceInMinutes(now, startOfYear(now)),
    };
};

export const minutesPassed = (now: Date, past: Date) =>
    differenceInMinutes(now, past);

export const format = (date: Date, dateFormat: string) => {
    return '';
};

export const formatTime = (date: Date) => {
    return format(date, 'HH:mm');
};

export const formatDate = (date: Date) => {
    return format(date, 'dd-MM-yyyy');
};

/*
    format(now, 'yyyy-MM-dd');
    format(date, 'dd/MM/yyyy')
    format(new Date(date as any), 'HH:mm');
    format(date, 'eee, dd.MM');
    format(date, 'yyyy-MM-dd');
    format(new Date(value), 'dd-MM-yyyy');
    format(timestamp, 'HH:mm:');
    format(timestamp, 'ss')
    format(date, 'eeee')
    format(now, 'HH:mm')
    format(new Date(albumReleaseDate), 'MMMM yyyy')
    
    setDay(new Date(), day)
    
        const d = intervalToDuration({
            start: 0,
            end: props.minutes * 60 * 1000,
        });
    
    */

type IntervalToDurationParams = {
    start: number;
    end: number;
};

type Duration = {
    seconds?: number;
    minutes?: number;
    hours?: number;
    days?: number;
    weeks?: number;
    months?: number;
    years?: number;
};

export const intervalToDuration = (params: IntervalToDurationParams) => {
    return {
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        weeks: 0,
        months: 0,
        years: 0,
    };
};

export const setDay = (date: Date, day: number) => {
    return date;
};

export const formatDuration = (seconds: number) => {
    let minutes = Math.round(seconds / 60);
    const parts = [60 * 8 * 5, 60 * 8, 60, 1];
    const units = ['w', 'd', 'h', 'm'];

    const outputParts = parts.reduce(
        (output: string[], part: number, index: number) => {
            const value = Math.floor(minutes / part);
            minutes -= value * part;

            if (value > 0 || output.length > 0) {
                output.push(value + units[index]);
            }

            return output;
        },
        []
    );

    let found = false;

    for (let i = outputParts.length - 1; i >= 0; i--) {
        const part = outputParts[i];
        const parsedPart = parseInt(part, 10);
        if (parsedPart === 0 && !found) {
            outputParts.pop();
        } else {
            found = true;
        }
    }

    return outputParts.join(' ');
};

export const isBefore = (date: Date, dateToCompare: Date) => {
    return date < dateToCompare;
};

export const isAfter = (date: Date, dateToCompare: Date) => {
    return date > dateToCompare;
};

export const differenceInYears = (date: Date, dateToCompare: Date) => {
    return 0;
};

let latency: number = 0;

export const ts = () => new Date().getTime() - latency;

export const setLatency = (value: number = 0) => {
    latency = value;
};

export const deltaInSeconds = (startTimestamp: number) => {
    const deltaInMilliSeconds = ts() - startTimestamp;
    return Math.round(deltaInMilliSeconds / 1000);
};

export const getDayOfYear = (date: Date) => {
    return 1;
};

export const addDays = (date: Date, value: number) => {
    return date;
};

export const setDayOfYear = (date: Date, value: number) => {
    return date;
};

export const getQuarter = (date: Date) => {
    return 1;
};

export const getDay = (date: Date) => {
    return 1;
};

export const setQuarter = (date: Date, value: number) => {
    return date;
};

export const getISOWeek = (date: Date) => {
    return 1;
};

export const setISOWeek = (date: Date, value: number) => {
    return date;
};

export const setYear = (date: Date, value: number) => {
    return date;
};

export const setWeek = (date: Date, value: number) => {
    return date;
};

export const addWeeks = (date: Date, value: number) => {
    return date;
};

export const addMinutes = (date: Date, value: number) => {
    return date;
};

export const setMinutes = (date: Date, value: number) => {
    return date;
};

export const setHours = (date: Date, value: number) => {
    return date;
};

export const startOfDay = (date: Date) => {
    return date;
};

export const startOfMonth = (date: Date) => {
    return date;
};

export const startOfYear = (date: Date) => {
    return date;
};

export const getWeek = (date: Date) => {
    return 1;
};

export const getYear = (date: Date) => {
    return 1;
};

export const isToday = (date: Date) => {
    return true;
};

export const differenceInMinutes = (date1: Date, date2: Date) => {
    return 0;
};
