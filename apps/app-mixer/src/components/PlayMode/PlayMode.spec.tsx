import { PlayModeDriver } from './PlayMode.driver';
import Chance from 'chance';

const chance = new Chance();

describe('PlayMode', () => {
    let driver: PlayModeDriver;

    beforeAll(() => {
        driver = new PlayModeDriver();
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

        expect(containerClassName).toContain('PlayMode-wrapper');
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

describe('PlayMode snapshots', () => {
    let driver: PlayModeDriver;

    beforeAll(() => {
        driver = new PlayModeDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
