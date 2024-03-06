import { OneBoardPageDriver } from './OneBoardPage.driver';
import Chance from 'chance';

const chance = new Chance();

describe('OneBoardPage', () => {
    let driver: OneBoardPageDriver;

    beforeAll(() => {
        driver = new OneBoardPageDriver();
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

        expect(wrapperClassName).toContain('OneBoardPage-wrapper');
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

describe('OneBoardPage snapshots', () => {
    let driver: OneBoardPageDriver;

    beforeAll(() => {
        driver = new OneBoardPageDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
