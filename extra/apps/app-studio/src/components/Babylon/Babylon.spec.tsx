import { BabylonDriver } from './Babylon.driver';

describe('Babylon', () => {
    let driver: BabylonDriver;

    beforeAll(() => {
        driver = new BabylonDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Babylon-wrapper');
    });
});

describe('Babylon snapshots', () => {
    let driver: BabylonDriver;

    beforeAll(() => {
        driver = new BabylonDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
