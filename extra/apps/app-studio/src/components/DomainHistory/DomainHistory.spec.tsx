import { DomainHistoryDriver } from './DomainHistory.driver';

describe('DomainHistory', () => {
    let driver: DomainHistoryDriver;

    beforeAll(() => {
        driver = new DomainHistoryDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('DomainHistory-wrapper');
    });
});

describe('DomainHistory snapshots', () => {
    let driver: DomainHistoryDriver;

    beforeAll(() => {
        driver = new DomainHistoryDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
