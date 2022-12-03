import { PreviewImageDriver } from './PreviewImage.driver';
import Chance from 'chance';

const chance = new Chance();

describe('PreviewImage', () => {
    let driver: PreviewImageDriver;

    beforeAll(() => {
        driver = new PreviewImageDriver();
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

        expect(containerClassName).toContain('PreviewImage-wrapper');
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

describe('PreviewImage snapshots', () => {
    let driver: PreviewImageDriver;

    beforeAll(() => {
        driver = new PreviewImageDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
