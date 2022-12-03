import { SquareSummaryDriver } from './SquareSummary.driver';

describe('SquareSummary', () => {
    let driver: SquareSummaryDriver;

    beforeAll(() => {
        driver = new SquareSummaryDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('SquareSummary-wrapper');
    });
});

describe('SquareSummary snapshots', () => {
    let driver: SquareSummaryDriver;

    beforeAll(() => {
        driver = new SquareSummaryDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
