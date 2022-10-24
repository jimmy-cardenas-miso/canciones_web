import { browser, logging } from 'protractor';
import { CollectorPage } from './collector.po';

describe('Collector Page', () => {
  let page: CollectorPage;

  beforeEach(() => {
    page = new CollectorPage();
  });

  it('should collector list', () => {
    page.navigateTo();

    expect(page.getCollectorList()).toEqual('Jaime Monsalve');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
