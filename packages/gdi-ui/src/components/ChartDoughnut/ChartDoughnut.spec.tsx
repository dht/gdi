import { ChartDoughnutDriver } from './ChartDoughnut.driver';

describe('ChartDoughnut', () => {
    let driver: ChartDoughnutDriver;

    beforeAll(() => {
        driver = new ChartDoughnutDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ChartDoughnut-container');
    });
});

describe('ChartDoughnut snapshots', () => {
    let driver: ChartDoughnutDriver;

    beforeAll(() => {
        driver = new ChartDoughnutDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
