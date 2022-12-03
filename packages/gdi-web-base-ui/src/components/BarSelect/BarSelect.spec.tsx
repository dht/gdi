import { BarSelectDriver } from './BarSelect.driver';

describe('BarSelect', () => {
    let driver: BarSelectDriver;

    beforeAll(() => {
        driver = new BarSelectDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('BarSelect-wrapper');
    });
});

describe('BarSelect snapshots', () => {
    let driver: BarSelectDriver;

    beforeAll(() => {
        driver = new BarSelectDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
