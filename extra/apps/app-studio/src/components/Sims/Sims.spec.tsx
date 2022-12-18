import { SimsDriver } from './Sims.driver';

describe('Sims', () => {
    let driver: SimsDriver;

    beforeAll(() => {
        driver = new SimsDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Sims-wrapper');
    });
});

describe('Sims snapshots', () => {
    let driver: SimsDriver;

    beforeAll(() => {
        driver = new SimsDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
