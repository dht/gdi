import { ScheduleTopDriver } from './ScheduleTop.driver';

describe('ScheduleTop', () => {
    let driver: ScheduleTopDriver;

    beforeAll(() => {
        driver = new ScheduleTopDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ScheduleTop-wrapper');
    });
});

describe('ScheduleTop snapshots', () => {
    let driver: ScheduleTopDriver;

    beforeAll(() => {
        driver = new ScheduleTopDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
