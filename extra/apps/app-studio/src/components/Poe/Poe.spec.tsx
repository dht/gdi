import { PoeDriver } from './Poe.driver';

describe('Poe', () => {
    let driver: PoeDriver;

    beforeAll(() => {
        driver = new PoeDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Poe-wrapper');
    });
});

describe('Poe snapshots', () => {
    let driver: PoeDriver;

    beforeAll(() => {
        driver = new PoeDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
