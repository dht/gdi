import { TutorialsWidgetDriver } from './TutorialsWidget.driver';
import Chance from 'chance';

const chance = new Chance();

describe('TutorialsWidget', () => {
    let driver: TutorialsWidgetDriver;

    beforeAll(() => {
        driver = new TutorialsWidgetDriver();
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

        expect(wrapperClassName).toContain('TutorialsWidget-wrapper');
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

describe('TutorialsWidget snapshots', () => {
    let driver: TutorialsWidgetDriver;

    beforeAll(() => {
        driver = new TutorialsWidgetDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
