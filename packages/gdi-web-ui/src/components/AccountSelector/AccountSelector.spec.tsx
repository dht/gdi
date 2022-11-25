import { AccountSelectorDriver } from './AccountSelector.driver';
import Chance from 'chance';

const chance = new Chance();

describe('AccountSelector', () => {
    let driver: AccountSelectorDriver;

    beforeAll(() => {
        driver = new AccountSelectorDriver();
    });

    it('should render button', () => {
        const label = chance.word();

        const element = driver.given
            .props({
                title: label,
            })
            .when.rendered();

        const containerClassName = element.get.containerClassName();
        const innerText = element.get.label();

        expect(containerClassName).toContain('AccountSelector-container');
        expect(innerText).toBe(label);
    });

    it('should click button', () => {
        const callback = jest.fn();

        driver.given
            .props({
                onClick: callback,
            })
            .when.rendered()
            .when.clicked();

        expect(callback).toHaveBeenCalledTimes(1);
    });
});

describe('AccountSelector snapshots', () => {
    let driver: AccountSelectorDriver;

    beforeAll(() => {
        driver = new AccountSelectorDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
