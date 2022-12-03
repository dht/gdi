import { WeekDriver } from './Week.driver';

describe('Week', () => {
    let driver: WeekDriver;

    beforeAll(() => {
        driver = new WeekDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Week-wrapper');
    });
});

describe('Week snapshots', () => {
    let driver: WeekDriver;

    beforeAll(() => {
        driver = new WeekDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
