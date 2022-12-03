import { StoreSizeDriver } from './StoreSize.driver';

describe('StoreSize', () => {
    let driver: StoreSizeDriver;

    beforeAll(() => {
        driver = new StoreSizeDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('StoreSize-wrapper');
    });
});

describe('StoreSize snapshots', () => {
    let driver: StoreSizeDriver;

    beforeAll(() => {
        driver = new StoreSizeDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
