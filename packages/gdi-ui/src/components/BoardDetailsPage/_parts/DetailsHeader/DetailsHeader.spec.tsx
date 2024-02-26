import { DetailsHeaderDriver } from './DetailsHeader.driver';
import Chance from 'chance';

const chance = new Chance();

describe('DetailsHeader', () => {
    let driver: DetailsHeaderDriver;

    beforeAll(() => {
        driver = new DetailsHeaderDriver();
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

        expect(wrapperClassName).toContain('DetailsHeader-wrapper');
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

describe('DetailsHeader snapshots', () => {
    let driver: DetailsHeaderDriver;

    beforeAll(() => {
        driver = new DetailsHeaderDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
