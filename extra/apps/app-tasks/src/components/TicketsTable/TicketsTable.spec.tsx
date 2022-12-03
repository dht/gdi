import { TicketsTableDriver } from './TicketsTable.driver';

describe('TicketsTable', () => {
    let driver: TicketsTableDriver;

    beforeAll(() => {
        driver = new TicketsTableDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('TicketsTable-wrapper');
    });
});

describe('TicketsTable snapshots', () => {
    let driver: TicketsTableDriver;

    beforeAll(() => {
        driver = new TicketsTableDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
