import { EstimateDriver } from './Estimate.driver';

describe('Estimate', () => {
    let driver: EstimateDriver;

    beforeAll(() => {
        driver = new EstimateDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Estimate-wrapper');
    });
});

describe('Estimate snapshots', () => {
    let driver: EstimateDriver;

    beforeAll(() => {
        driver = new EstimateDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
