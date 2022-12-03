import { DurationDriver } from './Duration.driver';

describe('Duration', () => {
    let driver: DurationDriver;

    beforeAll(() => {
        driver = new DurationDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Duration-wrapper');
    });
});

describe('Duration snapshots', () => {
    let driver: DurationDriver;

    beforeAll(() => {
        driver = new DurationDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
