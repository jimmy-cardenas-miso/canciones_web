import { AlbumDetailPage } from './album-detail.po';
import { browser, logging } from 'protractor';

describe('Album Detail Page', () => {
  let page: AlbumDetailPage;

  beforeEach(() => {
    page = new AlbumDetailPage();
  });

  it('should album detail', () => {
    page.navigateTo();
    expect(page.showAlbumDetail()).toContain('Detalle de');
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
