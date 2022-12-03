import { MiniDriver } from './Mini.driver';

describe('Mini', () => {
    let driver: MiniDriver;

    beforeAll(() => {
        driver = new MiniDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Mini-wrapper');
    });
});

describe('Mini snapshots', () => {
    let driver: MiniDriver;

    beforeAll(() => {
        driver = new MiniDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
