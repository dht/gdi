import { FiltersDriver } from './Filters.driver';

describe('Filters', () => {
    let driver: FiltersDriver;

    beforeAll(() => {
        driver = new FiltersDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Filters-container');
    });
});

describe('Filters snapshots', () => {
    let driver: FiltersDriver;

    beforeAll(() => {
        driver = new FiltersDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
