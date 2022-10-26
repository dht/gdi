import { HoustonDriver } from './Houston.driver';

describe('Houston', () => {
    let driver: HoustonDriver;

    beforeAll(() => {
        driver = new HoustonDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Houston-container');
    });
});

describe('Houston snapshots', () => {
    let driver: HoustonDriver;

    beforeAll(() => {
        driver = new HoustonDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
