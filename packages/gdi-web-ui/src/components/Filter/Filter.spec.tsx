import { FilterDriver } from './Filter.driver';

describe('Filter', () => {
    let driver: FilterDriver;

    beforeAll(() => {
        driver = new FilterDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Filter-container');
    });
});

describe('Filter snapshots', () => {
    let driver: FilterDriver;

    beforeAll(() => {
        driver = new FilterDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
