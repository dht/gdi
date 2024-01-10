import { CreatableDriver } from './Creatable.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Creatable', () => {
    let driver: CreatableDriver;

    beforeAll(() => {
        driver = new CreatableDriver();
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

        expect(wrapperClassName).toContain('Creatable-wrapper');
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

describe('Creatable snapshots', () => {
    let driver: CreatableDriver;

    beforeAll(() => {
        driver = new CreatableDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
