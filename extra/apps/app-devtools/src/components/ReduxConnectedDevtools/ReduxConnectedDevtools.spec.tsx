import { ReduxConnectedDevtoolsDriver } from './ReduxConnectedDevtools.driver';

describe('ReduxConnectedDevtools', () => {
    let driver: ReduxConnectedDevtoolsDriver;

    beforeAll(() => {
        driver = new ReduxConnectedDevtoolsDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ReduxConnectedDevtools-wrapper');
    });
});

describe('ReduxConnectedDevtools snapshots', () => {
    let driver: ReduxConnectedDevtoolsDriver;

    beforeAll(() => {
        driver = new ReduxConnectedDevtoolsDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
