import { IsoBrowserDriver } from './IsoBrowser.driver';

describe('IsoBrowser', () => {
    let driver: IsoBrowserDriver;

    beforeAll(() => {
        driver = new IsoBrowserDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('IsoBrowser-container');
    });
});

describe('IsoBrowser snapshots', () => {
    let driver: IsoBrowserDriver;

    beforeAll(() => {
        driver = new IsoBrowserDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
