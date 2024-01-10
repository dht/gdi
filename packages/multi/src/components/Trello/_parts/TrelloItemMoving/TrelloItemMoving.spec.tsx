import { TrelloItemMovingDriver } from './TrelloItemMoving.driver';
import Chance from 'chance';

const chance = new Chance();

describe('TrelloItemMoving', () => {
  let driver: TrelloItemMovingDriver;

  beforeAll(() => {
    driver = new TrelloItemMovingDriver();
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

    expect(containerClassName).toContain('TrelloItemMoving-container');
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

describe('TrelloItemMoving snapshots', () => {
  let driver: TrelloItemMovingDriver;

  beforeAll(() => {
    driver = new TrelloItemMovingDriver();
  });

  it('should match snapshot', () => {
    expect(driver.when.snapshot()).toMatchSnapshot();
  });
});
