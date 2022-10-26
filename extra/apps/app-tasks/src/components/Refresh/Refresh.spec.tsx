import { RefreshDriver } from './Refresh.driver';

describe('Refresh', () => {
    let driver: RefreshDriver;

    beforeAll(() => {
        driver = new RefreshDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Refresh-container');
    });
});

describe('Refresh snapshots', () => {
    let driver: RefreshDriver;

    beforeAll(() => {
        driver = new RefreshDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
