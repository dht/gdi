import { DomainPanelDriver } from './DomainPanel.driver';

describe('DomainPanel', () => {
    let driver: DomainPanelDriver;

    beforeAll(() => {
        driver = new DomainPanelDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('DomainPanel-container');
    });
});

describe('DomainPanel snapshots', () => {
    let driver: DomainPanelDriver;

    beforeAll(() => {
        driver = new DomainPanelDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
