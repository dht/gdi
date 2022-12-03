import { LogoDriver } from './Logo.driver';

describe('Logo', () => {
    let driver: LogoDriver;

    beforeAll(() => {
        driver = new LogoDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Logo-wrapper');
    });
});

describe('Logo snapshots', () => {
    let driver: LogoDriver;

    beforeAll(() => {
        driver = new LogoDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
