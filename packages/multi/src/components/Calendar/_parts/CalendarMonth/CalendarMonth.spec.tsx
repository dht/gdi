import { CalendarMonthDriver } from './CalendarMonth.driver';
import Chance from 'chance';

const chance = new Chance();

describe('CalendarMonth', () => {
    let driver: CalendarMonthDriver;

    beforeAll(() => {
        driver = new CalendarMonthDriver();
    });

    it('should render button', () => {
        const label = chance.word();

        const element = driver.given
            .props({
                title: label,
            })
            .when.rendered();

        const wrapperClassName = element.get.wrapperClassName();
        const innerText = element.get.label();

        expect(wrapperClassName).toContain('CalendarMonth-wrapper');
        expect(innerText).toBe(label);
    });

    it('should click button', () => {
        const callback = jest.fn();

        driver.given
            .props({
                onClick: callback,
            })
            .when.rendered()
            .when.clicked();

        expect(callback).toHaveBeenCalledTimes(1);
    });
});

describe('CalendarMonth snapshots', () => {
    let driver: CalendarMonthDriver;

    beforeAll(() => {
        driver = new CalendarMonthDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
