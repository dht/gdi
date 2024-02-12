import { TubeTopDriver } from './TubeTop.driver';
import Chance from 'chance';

const chance = new Chance();

describe('TubeTop', () => {
    let driver: TubeTopDriver;

    beforeAll(() => {
        driver = new TubeTopDriver();
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

        expect(wrapperClassName).toContain('TubeTop-wrapper');
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

describe('TubeTop snapshots', () => {
    let driver: TubeTopDriver;

    beforeAll(() => {
        driver = new TubeTopDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
