import { browser, logging } from 'protractor';
import { CollectorAddAlbumPage } from './collector-add-album.po';

describe('Collector Add Album', () => {
  let page: CollectorAddAlbumPage;

  beforeEach(() => {
    page = new CollectorAddAlbumPage();
  });

  it('should add album to collector', () => {
    page.navigateTo();
    page.clickFirstAlbumButton();

    expect(page.getAlbumName()).toContain('Buscando América');
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
