import { TimeDriver } from './Time.driver';

describe('Time', () => {
    let driver: TimeDriver;

    beforeAll(() => {
        driver = new TimeDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Time-wrapper');
    });
});

describe('Time snapshots', () => {
    let driver: TimeDriver;

    beforeAll(() => {
        driver = new TimeDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
