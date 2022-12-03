import { TopRowDriver } from './TopRow.driver';

describe('TopRow', () => {
    let driver: TopRowDriver;

    beforeAll(() => {
        driver = new TopRowDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('TopRow-wrapper');
    });
});

describe('TopRow snapshots', () => {
    let driver: TopRowDriver;

    beforeAll(() => {
        driver = new TopRowDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
