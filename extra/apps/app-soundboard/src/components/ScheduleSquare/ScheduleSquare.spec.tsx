import { ScheduleSquareDriver } from './ScheduleSquare.driver';

describe('ScheduleSquare', () => {
    let driver: ScheduleSquareDriver;

    beforeAll(() => {
        driver = new ScheduleSquareDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ScheduleSquare-wrapper');
    });
});

describe('ScheduleSquare snapshots', () => {
    let driver: ScheduleSquareDriver;

    beforeAll(() => {
        driver = new ScheduleSquareDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
