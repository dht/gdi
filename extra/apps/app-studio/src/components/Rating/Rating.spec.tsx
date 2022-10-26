import { RatingDriver } from './Rating.driver';

describe('Rating', () => {
    let driver: RatingDriver;

    beforeAll(() => {
        driver = new RatingDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Rating-container');
    });
});

describe('Rating snapshots', () => {
    let driver: RatingDriver;

    beforeAll(() => {
        driver = new RatingDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
