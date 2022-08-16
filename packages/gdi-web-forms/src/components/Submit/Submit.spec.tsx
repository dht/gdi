import { SubmitDriver } from './Submit.driver';

describe('Submit', () => {
    let driver: SubmitDriver;

    beforeAll(() => {
        driver = new SubmitDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('Submit-container');
    });
});

describe('Submit snapshots', () => {
    let driver: SubmitDriver;

    beforeAll(() => {
        driver = new SubmitDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
