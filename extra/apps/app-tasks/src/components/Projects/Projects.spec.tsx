import { ProjectsDriver } from './Projects.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Projects', () => {
    let driver: ProjectsDriver;

    beforeAll(() => {
        driver = new ProjectsDriver();
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

        expect(containerClassName).toContain('Projects-wrapper');
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

describe('Projects snapshots', () => {
    let driver: ProjectsDriver;

    beforeAll(() => {
        driver = new ProjectsDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
