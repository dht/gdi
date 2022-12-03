import { TableCellDriver } from './TableCell.driver';

describe('TableCell', () => {
    let driver: TableCellDriver;

    beforeAll(() => {
        driver = new TableCellDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('TableCell-wrapper');
    });
});

describe('TableCell snapshots', () => {
    let driver: TableCellDriver;

    beforeAll(() => {
        driver = new TableCellDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
