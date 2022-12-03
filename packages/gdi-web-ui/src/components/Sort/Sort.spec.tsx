import { SortDriver } from './Sort.driver';

describe('Sort', () => {
    let driver: SortDriver;

    beforeAll(() => {
        driver = new SortDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Sort-wrapper');
    });
});

describe('Sort snapshots', () => {
    let driver: SortDriver;

    beforeAll(() => {
        driver = new SortDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
