import { TicketsByProjectDriver } from './TicketsByProject.driver';

describe('TicketsByProject', () => {
    let driver: TicketsByProjectDriver;

    beforeAll(() => {
        driver = new TicketsByProjectDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('TicketsByProject-wrapper');
    });
});

describe('TicketsByProject snapshots', () => {
    let driver: TicketsByProjectDriver;

    beforeAll(() => {
        driver = new TicketsByProjectDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
