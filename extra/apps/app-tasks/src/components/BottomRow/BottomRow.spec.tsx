import { BottomRowDriver } from './BottomRow.driver';

describe('BottomRow', () => {
    let driver: BottomRowDriver;

    beforeAll(() => {
        driver = new BottomRowDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('BottomRow-wrapper');
    });
});

describe('BottomRow snapshots', () => {
    let driver: BottomRowDriver;

    beforeAll(() => {
        driver = new BottomRowDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
