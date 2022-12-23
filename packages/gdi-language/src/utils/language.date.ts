import { TimePeriod } from '../types';
import { normalize } from './date';
import { getIsMonthFirst } from './formatObjects';
import {
    add,
    dateDbLong,
    dateInfo,
    dateLong,
    dateShort,
    set,
} from './language.dates';

export class XDate {
    private date: Date | null | undefined;

    static now() {
        return new XDate();
    }

    static fromWeek(week: number, year: number, dayOfWeek: number = 0) {
        const date = new Date(year, 0, 1);
        const day = date.getDay();
        const diff = week * 7 + dayOfWeek - day + 1;

        date.setDate(diff);

        return new XDate(date);
    }

    static fromString(string: string) {
        const parts = string.split(/[\.-]/g);
        const isMonthFirst = getIsMonthFirst();
        console.log('parts ->', parts);
        console.log('isMonthFirst ->', isMonthFirst);

        return new XDate();
    }

    constructor(date?: DateTime) {
        this.date = date ? normalize(date) : new Date();
    }

    add(value: number, period: TimePeriod) {
        if (!this.date) {
            return this;
        }

        this.date = add(this.date, value, period);

        return this;
    }

    set(value: number, period: TimePeriod) {
        if (!this.date) {
            return this;
        }

        this.date = set(this.date, value, period);

        return this;
    }

    setTime(time: string) {
        if (!this.date) {
            return this;
        }

        const parts = time.split(':').map((i) => parseInt(i));

        this.date.setHours(parts[0]);
        this.date.setMinutes(parts[1]);
        this.date.setSeconds(parts[2] ?? 0);

        return this;
    }

    setDayOfWeek(dayOfWeek: number) {
        if (!this.date) {
            return this;
        }

        this.date.setDate(
            this.date.getDate() + (dayOfWeek - this.date.getDay())
        );

        return this;
    }

    toInfo() {
        if (!this.date) {
            return;
        }

        return dateInfo(this.date);
    }

    toText(withHour?: boolean) {
        if (!this.date) {
            return;
        }

        return withHour ? dateLong(this.date) : dateShort(this.date);
    }

    toString() {
        if (!this.date) {
            return;
        }

        return dateDbLong(this.date);
    }

    get value() {
        return this.date;
    }
}
