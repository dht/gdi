import { ScheduleClock2Driver } from './ScheduleClock2.driver';

describe('ScheduleClock2', () => {
    let driver: ScheduleClock2Driver;

    beforeAll(() => {
        driver = new ScheduleClock2Driver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ScheduleClock2-wrapper');
    });
});

describe('ScheduleClock2 snapshots', () => {
    let driver: ScheduleClock2Driver;

    beforeAll(() => {
        driver = new ScheduleClock2Driver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
