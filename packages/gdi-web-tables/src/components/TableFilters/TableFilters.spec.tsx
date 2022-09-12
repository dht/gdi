import { TableFiltersDriver } from './TableFilters.driver';

describe('TableFilters', () => {
    let driver: TableFiltersDriver;

    beforeAll(() => {
        driver = new TableFiltersDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('TableFilters-container');
    });
});

describe('TableFilters snapshots', () => {
    let driver: TableFiltersDriver;

    beforeAll(() => {
        driver = new TableFiltersDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
