import { OAuthPopupDriver } from './OAuthPopup.driver';

describe('OAuthPopup', () => {
    let driver: OAuthPopupDriver;

    beforeAll(() => {
        driver = new OAuthPopupDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('OAuthPopup-wrapper');
    });
});

describe('OAuthPopup snapshots', () => {
    let driver: OAuthPopupDriver;

    beforeAll(() => {
        driver = new OAuthPopupDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
