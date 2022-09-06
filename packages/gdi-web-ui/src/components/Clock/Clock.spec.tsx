import { ClockDriver } from './Clock.driver';

describe('Clock', () => {
    let driver: ClockDriver;

    beforeAll(() => {
        driver = new ClockDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Clock-container');
    });
});

describe('Clock snapshots', () => {
    let driver: ClockDriver;

    beforeAll(() => {
        driver = new ClockDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
