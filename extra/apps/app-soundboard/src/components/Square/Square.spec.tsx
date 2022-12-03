import { SquareDriver } from './Square.driver';

describe('Square', () => {
    let driver: SquareDriver;

    beforeAll(() => {
        driver = new SquareDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Square-wrapper');
    });
});

describe('Square snapshots', () => {
    let driver: SquareDriver;

    beforeAll(() => {
        driver = new SquareDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
