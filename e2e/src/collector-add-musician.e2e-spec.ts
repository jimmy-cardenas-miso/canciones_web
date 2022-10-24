import { browser, logging } from 'protractor';
import { CollectorAddMusicianPage } from './collector-add-musician.po';

describe('Collector Add Musician', () => {
  let page: CollectorAddMusicianPage;

  beforeEach(() => {
    page = new CollectorAddMusicianPage();
  });

  it('should add artist to collector', () => {
    page.navigateTo();
    page.clickFirstArtistButton();

    expect(page.getArtistName()).toContain('Rubén Blades Bellido de Luna');
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
