import { TaskTitleDriver } from './TaskTitle.driver';

describe('TaskTitle', () => {
    let driver: TaskTitleDriver;

    beforeAll(() => {
        driver = new TaskTitleDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('TaskTitle-wrapper');
    });
});

describe('TaskTitle snapshots', () => {
    let driver: TaskTitleDriver;

    beforeAll(() => {
        driver = new TaskTitleDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
