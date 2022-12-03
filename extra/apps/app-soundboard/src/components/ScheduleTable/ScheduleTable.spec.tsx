import { ScheduleTableDriver } from './ScheduleTable.driver';

describe('ScheduleTable', () => {
    let driver: ScheduleTableDriver;

    beforeAll(() => {
        driver = new ScheduleTableDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ScheduleTable-wrapper');
    });
});

describe('ScheduleTable snapshots', () => {
    let driver: ScheduleTableDriver;

    beforeAll(() => {
        driver = new ScheduleTableDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
