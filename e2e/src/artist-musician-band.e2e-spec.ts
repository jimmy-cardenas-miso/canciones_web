import { ArtistMusicianBandPage } from './artist-musician-band.po';
import { browser, logging } from 'protractor';

describe('Add Musician Band', () => {
  let page: ArtistMusicianBandPage;

  beforeEach(() => {
    page = new ArtistMusicianBandPage();
  });

  it('should musician band addition', () => {
    page.navigateTo();
    page.setMusician();
    page.clickAddMusician();

    expect(page.getMusicianList()).toContain('Rubén');
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
