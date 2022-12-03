import { IdeasDriver } from './Ideas.driver';

describe('Ideas', () => {
    let driver: IdeasDriver;

    beforeAll(() => {
        driver = new IdeasDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Ideas-wrapper');
    });
});

describe('Ideas snapshots', () => {
    let driver: IdeasDriver;

    beforeAll(() => {
        driver = new IdeasDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
