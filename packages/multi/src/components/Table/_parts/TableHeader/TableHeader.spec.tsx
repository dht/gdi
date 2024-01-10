import { TableHeaderDriver } from './TableHeader.driver';

describe('TableHeader', () => {
    let driver: TableHeaderDriver;

    beforeAll(() => {
        driver = new TableHeaderDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('TableHeader-wrapper');
    });
});

describe('TableHeader snapshots', () => {
    let driver: TableHeaderDriver;

    beforeAll(() => {
        driver = new TableHeaderDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
