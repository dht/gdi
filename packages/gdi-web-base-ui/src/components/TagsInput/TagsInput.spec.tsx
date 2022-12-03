import { TagsInputDriver } from './TagsInput.driver';

describe('TagsInput', () => {
    let driver: TagsInputDriver;

    beforeAll(() => {
        driver = new TagsInputDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('TagsInput-wrapper');
    });
});

describe('TagsInput snapshots', () => {
    let driver: TagsInputDriver;

    beforeAll(() => {
        driver = new TagsInputDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
