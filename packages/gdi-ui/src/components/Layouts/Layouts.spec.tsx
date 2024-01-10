import { LayoutsDriver } from './Layouts.driver';

describe('Layouts', () => {
  let driver: LayoutsDriver;

  beforeAll(() => {
    driver = new LayoutsDriver();
  });

  it('should render component', () => {
    const containerClassName = driver.given //
      .props({})
      .when.rendered()
      .get.containerClassName();

    expect(containerClassName).toBe('Layouts-wrapper');
  });
});

describe('Layouts snapshots', () => {
  let driver: LayoutsDriver;

  beforeAll(() => {
    driver = new LayoutsDriver();
  });

  it('should render component', () => {
    expect(driver.when.snapshot()).toMatchSnapshot();
  });
});
