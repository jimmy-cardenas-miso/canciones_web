import { AlbumPage } from './album.po';
import { browser, logging } from 'protractor';

describe('Album Page', () => {
  let page: AlbumPage;

  beforeEach(() => {
    page = new AlbumPage();
  });

  it('should albums list', () => {
    page.navigateTo();

    expect(page.getAlbumsList()).toEqual('EMI');
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
