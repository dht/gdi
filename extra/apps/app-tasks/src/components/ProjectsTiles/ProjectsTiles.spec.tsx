import { ProjectsTilesDriver } from './ProjectsTiles.driver';

describe('ProjectsTiles', () => {
    let driver: ProjectsTilesDriver;

    beforeAll(() => {
        driver = new ProjectsTilesDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ProjectsTiles-wrapper');
    });
});

describe('ProjectsTiles snapshots', () => {
    let driver: ProjectsTilesDriver;

    beforeAll(() => {
        driver = new ProjectsTilesDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
