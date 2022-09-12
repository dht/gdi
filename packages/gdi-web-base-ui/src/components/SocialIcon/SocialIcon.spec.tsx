import { SocialIconDriver } from './SocialIcon.driver';

describe('SocialIcon', () => {
    let driver: SocialIconDriver;

    beforeAll(() => {
        driver = new SocialIconDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('SocialIcon-container');
    });
});

describe('SocialIcon snapshots', () => {
    let driver: SocialIconDriver;

    beforeAll(() => {
        driver = new SocialIconDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
