import { SelectCellDriver } from './SelectCell.driver';
import Chance from 'chance';

const chance = new Chance();

describe('SelectCell', () => {
    let driver: SelectCellDriver;

    beforeAll(() => {
        driver = new SelectCellDriver();
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

        expect(wrapperClassName).toContain('SelectCell-wrapper');
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

describe('SelectCell snapshots', () => {
    let driver: SelectCellDriver;

    beforeAll(() => {
        driver = new SelectCellDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
