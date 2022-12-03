import { LiveTaskDriver } from './LiveTask.driver';

describe('LiveTask', () => {
    let driver: LiveTaskDriver;

    beforeAll(() => {
        driver = new LiveTaskDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('LiveTask-wrapper');
    });
});

describe('LiveTask snapshots', () => {
    let driver: LiveTaskDriver;

    beforeAll(() => {
        driver = new LiveTaskDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
