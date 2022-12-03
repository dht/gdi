import { LegendDriver } from './Legend.driver';

describe('Legend', () => {
    let driver: LegendDriver;

    beforeAll(() => {
        driver = new LegendDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Legend-wrapper');
    });
});

describe('Legend snapshots', () => {
    let driver: LegendDriver;

    beforeAll(() => {
        driver = new LegendDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
