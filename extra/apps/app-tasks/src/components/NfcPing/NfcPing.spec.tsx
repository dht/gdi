import { NfcPingDriver } from './NfcPing.driver';

describe('NfcPing', () => {
    let driver: NfcPingDriver;

    beforeAll(() => {
        driver = new NfcPingDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('NfcPing-wrapper');
    });
});

describe('NfcPing snapshots', () => {
    let driver: NfcPingDriver;

    beforeAll(() => {
        driver = new NfcPingDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
