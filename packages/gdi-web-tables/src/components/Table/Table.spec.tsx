import { TableDriver } from './Table.driver';

describe('Table', () => {
    let driver: TableDriver;

    beforeAll(() => {
        driver = new TableDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Table-container');
    });
});

describe('Table snapshots', () => {
    let driver: TableDriver;

    beforeAll(() => {
        driver = new TableDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
