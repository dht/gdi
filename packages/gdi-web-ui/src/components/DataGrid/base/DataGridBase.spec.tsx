import { DataGridBaseDriver } from './DataGridBase.driver';

describe('DataGridBase', () => {
    let driver: DataGridBaseDriver;

    beforeAll(() => {
        driver = new DataGridBaseDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('DataGridBase-container');
    });
});

describe('DataGridBase snapshots', () => {
    let driver: DataGridBaseDriver;

    beforeAll(() => {
        driver = new DataGridBaseDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
