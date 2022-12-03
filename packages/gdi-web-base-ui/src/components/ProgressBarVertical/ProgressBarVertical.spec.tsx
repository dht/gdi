import { ProgressBarDriver } from './ProgressBarVertical.driver';

describe('ProgressBar', () => {
    let driver: ProgressBarDriver;

    beforeAll(() => {
        driver = new ProgressBarDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ProgressBar-wrapper');
    });
});

describe('ProgressBar snapshots', () => {
    let driver: ProgressBarDriver;

    beforeAll(() => {
        driver = new ProgressBarDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
