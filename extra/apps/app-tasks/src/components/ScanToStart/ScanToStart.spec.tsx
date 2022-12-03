import { ScanToStartDriver } from './ScanToStart.driver';

describe('ScanToStart', () => {
    let driver: ScanToStartDriver;

    beforeAll(() => {
        driver = new ScanToStartDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ScanToStart-wrapper');
    });
});

describe('ScanToStart snapshots', () => {
    let driver: ScanToStartDriver;

    beforeAll(() => {
        driver = new ScanToStartDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
