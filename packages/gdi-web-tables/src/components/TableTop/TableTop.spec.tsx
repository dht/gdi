import { TableTopDriver } from './TableTop.driver';

describe('TableTop', () => {
    let driver: TableTopDriver;

    beforeAll(() => {
        driver = new TableTopDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('TableTop-container');
    });
});

describe('TableTop snapshots', () => {
    let driver: TableTopDriver;

    beforeAll(() => {
        driver = new TableTopDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
