import { SquaresDriver } from './Squares.driver';

describe('Squares', () => {
    let driver: SquaresDriver;

    beforeAll(() => {
        driver = new SquaresDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Squares-wrapper');
    });
});

describe('Squares snapshots', () => {
    let driver: SquaresDriver;

    beforeAll(() => {
        driver = new SquaresDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
