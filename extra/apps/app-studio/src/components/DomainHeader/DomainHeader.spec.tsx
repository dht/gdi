import { DomainHeaderDriver } from './DomainHeader.driver';

describe('DomainHeader', () => {
    let driver: DomainHeaderDriver;

    beforeAll(() => {
        driver = new DomainHeaderDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('DomainHeader-wrapper');
    });
});

describe('DomainHeader snapshots', () => {
    let driver: DomainHeaderDriver;

    beforeAll(() => {
        driver = new DomainHeaderDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
