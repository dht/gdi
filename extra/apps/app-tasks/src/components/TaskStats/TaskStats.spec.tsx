import { TaskStatsDriver } from './TaskStats.driver';

describe('TaskStats', () => {
    let driver: TaskStatsDriver;

    beforeAll(() => {
        driver = new TaskStatsDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('TaskStats-container');
    });
});

describe('TaskStats snapshots', () => {
    let driver: TaskStatsDriver;

    beforeAll(() => {
        driver = new TaskStatsDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
