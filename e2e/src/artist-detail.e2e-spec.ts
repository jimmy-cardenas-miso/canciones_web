import { browser, logging } from 'protractor';
import { ArtistDetailPage } from './artist-detail.po';

describe('Artist Detail Page', () => {
  let page: ArtistDetailPage;

  beforeEach(() => {
    page = new ArtistDetailPage();
  });

  it('should Artist detail', () => {
    page.navigateTo();
    expect(page.ShowArtistDetail()).toContain('Rubén Blades');
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
