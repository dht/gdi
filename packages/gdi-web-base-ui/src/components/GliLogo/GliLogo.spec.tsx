import { GliLogoDriver } from './GliLogo.driver';

describe('GliLogo', () => {
    let driver: GliLogoDriver;

    beforeAll(() => {
        driver = new GliLogoDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('GliLogo-container');
    });
});

describe('GliLogo snapshots', () => {
    let driver: GliLogoDriver;

    beforeAll(() => {
        driver = new GliLogoDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
