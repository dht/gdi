import { DataGridDriver } from './DataGrid.driver';

describe('DataGrid', () => {
    let driver: DataGridDriver;

    beforeAll(() => {
        driver = new DataGridDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('DataGrid-container');
    });
});

describe('DataGrid snapshots', () => {
    let driver: DataGridDriver;

    beforeAll(() => {
        driver = new DataGridDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
