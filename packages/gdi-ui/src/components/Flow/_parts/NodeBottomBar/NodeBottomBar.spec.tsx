import { NodeBottomBarDriver } from './NodeBottomBar.driver';
import Chance from 'chance';

const chance = new Chance();

describe('NodeBottomBar', () => {
    let driver: NodeBottomBarDriver;

    beforeAll(() => {
        driver = new NodeBottomBarDriver();
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

        expect(wrapperClassName).toContain('NodeBottomBar-wrapper');
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

describe('NodeBottomBar snapshots', () => {
    let driver: NodeBottomBarDriver;

    beforeAll(() => {
        driver = new NodeBottomBarDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
