import { UserBarMobileDriver } from './UserBarMobile.driver';

describe('UserBarMobile', () => {
    let driver: UserBarMobileDriver;

    beforeAll(() => {
        driver = new UserBarMobileDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('UserBarMobile-container');
    });
});

describe('UserBarMobile snapshots', () => {
    let driver: UserBarMobileDriver;

    beforeAll(() => {
        driver = new UserBarMobileDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
