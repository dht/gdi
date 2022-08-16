import { ImageUploadDriver } from './ImageUpload.driver';

describe('ImageUpload', () => {
    let driver: ImageUploadDriver;

    beforeAll(() => {
        driver = new ImageUploadDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ImageUpload-container');
    });
});

describe('ImageUpload snapshots', () => {
    let driver: ImageUploadDriver;

    beforeAll(() => {
        driver = new ImageUploadDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
