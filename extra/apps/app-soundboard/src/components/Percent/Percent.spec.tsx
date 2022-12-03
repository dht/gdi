import { PercentDriver } from './Percent.driver';

describe('Percent', () => {
    let driver: PercentDriver;

    beforeAll(() => {
        driver = new PercentDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Percent-wrapper');
    });
});

describe('Percent snapshots', () => {
    let driver: PercentDriver;

    beforeAll(() => {
        driver = new PercentDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
