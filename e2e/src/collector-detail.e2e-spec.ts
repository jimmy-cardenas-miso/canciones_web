import { browser, logging } from 'protractor';
import { CollectorDetailPage } from './collector-detail.po';

describe('Collector Detail Page', () => {
  let page: CollectorDetailPage;

  beforeEach(() => {
    page = new CollectorDetailPage();
  });

  it('should collector detail', () => {
    page.navigateTo();
    expect(page.showCollectorDetail()).toContain('Detalle de colecccionista');
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
