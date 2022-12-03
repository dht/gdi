import { ScheduleDayDriver } from './ScheduleDay.driver';

describe('ScheduleDay', () => {
    let driver: ScheduleDayDriver;

    beforeAll(() => {
        driver = new ScheduleDayDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ScheduleDay-wrapper');
    });
});

describe('ScheduleDay snapshots', () => {
    let driver: ScheduleDayDriver;

    beforeAll(() => {
        driver = new ScheduleDayDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
