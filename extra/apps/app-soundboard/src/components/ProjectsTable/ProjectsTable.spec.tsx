import { ProjectsTableDriver } from './ProjectsTable.driver';

describe('ProjectsTable', () => {
    let driver: ProjectsTableDriver;

    beforeAll(() => {
        driver = new ProjectsTableDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ProjectsTable-wrapper');
    });
});

describe('ProjectsTable snapshots', () => {
    let driver: ProjectsTableDriver;

    beforeAll(() => {
        driver = new ProjectsTableDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
