import { browser, logging } from 'protractor';
import { AddAlbumPage } from './add-album.po';

describe('Add New Album', () => {
  let page: AddAlbumPage;

  beforeEach(() => {
    page = new AddAlbumPage();
  });

  it('should new album record exist', () => {
    page.navigateTo();
    page.clickNewAlbumButton();
    page.setNameTrack('This is the test of tracks');
    page.setCover(
      'https://i.pinimg.com/originals/a0/d9/47/a0d9478bdd81638f71ff43812e898fe0.jpg'
    );
    page.setReleaseDate('23/05/2020');
    page.setDescription('Testing track description');
    page.setgenre();
    page.clickAddAlbumSubmit();
    page.navigateToAlbums();
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
