import { ScheduleClockDriver } from './ScheduleClock.driver';

describe('ScheduleClock', () => {
    let driver: ScheduleClockDriver;

    beforeAll(() => {
        driver = new ScheduleClockDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ScheduleClock-wrapper');
    });
});

describe('ScheduleClock snapshots', () => {
    let driver: ScheduleClockDriver;

    beforeAll(() => {
        driver = new ScheduleClockDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
