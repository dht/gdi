import { ItemImageDriver } from './ItemImage.driver';
import Chance from 'chance';

const chance = new Chance();

describe('ItemImage', () => {
    let driver: ItemImageDriver;

    beforeAll(() => {
        driver = new ItemImageDriver();
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

        expect(containerClassName).toContain('ItemImage-wrapper');
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

describe('ItemImage snapshots', () => {
    let driver: ItemImageDriver;

    beforeAll(() => {
        driver = new ItemImageDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
