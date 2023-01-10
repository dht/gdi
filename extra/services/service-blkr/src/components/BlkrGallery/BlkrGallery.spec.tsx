import { BlkrGalleryDriver } from './BlkrGallery.driver';
import Chance from 'chance';

const chance = new Chance();

describe('BlkrGallery', () => {
    let driver: BlkrGalleryDriver;

    beforeAll(() => {
        driver = new BlkrGalleryDriver();
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

        expect(wrapperClassName).toContain('BlkrGallery-wrapper');
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

describe('BlkrGallery snapshots', () => {
    let driver: BlkrGalleryDriver;

    beforeAll(() => {
        driver = new BlkrGalleryDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
