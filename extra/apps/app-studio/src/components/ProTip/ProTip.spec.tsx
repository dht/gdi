import { ProTipDriver } from './ProTip.driver';

describe('ProTip', () => {
    let driver: ProTipDriver;

    beforeAll(() => {
        driver = new ProTipDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ProTip-wrapper');
    });
});

describe('ProTip snapshots', () => {
    let driver: ProTipDriver;

    beforeAll(() => {
        driver = new ProTipDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
