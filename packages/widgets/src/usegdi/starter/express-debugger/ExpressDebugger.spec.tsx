import { ExpressDebuggerDriver } from './ExpressDebugger.driver';
import Chance from 'chance';

const chance = new Chance();

describe('ExpressDebugger', () => {
    let driver: ExpressDebuggerDriver;

    beforeAll(() => {
        driver = new ExpressDebuggerDriver();
    });

    it('should render button', () => {
        const label = chance.word();

        const element = driver.given
            .props({
                title: label,
            })
            .when.rendered();

        const wrapperClassName = element.get.wrapperClassName();
        const innerText = element.get.label();

        expect(wrapperClassName).toContain('ExpressDebugger-wrapper');
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

describe('ExpressDebugger snapshots', () => {
    let driver: ExpressDebuggerDriver;

    beforeAll(() => {
        driver = new ExpressDebuggerDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
