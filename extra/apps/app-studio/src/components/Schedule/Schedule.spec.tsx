import { ScheduleDriver } from './Schedule.driver';

describe('Schedule', () => {
    let driver: ScheduleDriver;

    beforeAll(() => {
        driver = new ScheduleDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Schedule-wrapper');
    });
});

describe('Schedule snapshots', () => {
    let driver: ScheduleDriver;

    beforeAll(() => {
        driver = new ScheduleDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
