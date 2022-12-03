import { TicketsRecentDriver } from './TicketsRecent.driver';

describe('TicketsRecent', () => {
    let driver: TicketsRecentDriver;

    beforeAll(() => {
        driver = new TicketsRecentDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('TicketsRecent-wrapper');
    });
});

describe('TicketsRecent snapshots', () => {
    let driver: TicketsRecentDriver;

    beforeAll(() => {
        driver = new TicketsRecentDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
