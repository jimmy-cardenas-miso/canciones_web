import { browser, logging } from 'protractor';
import { AddTrackPage } from './add-track-album.po';

describe('Add New Track', () => {
  let page: AddTrackPage;

  beforeEach(() => {
    page = new AddTrackPage();
  });

  it('given a new track then appears on track list of the album', () => {
    page.navigateTo();
    page.expandTrackAccordion();
    page.navigateToAddNewTrack();
    page.setNameTrack('This is the test of tracks');
    page.setDuration('5:00');
    page.clickAddTrackSubmit();
    page.navigateTo();
    page.expandTrackAccordion();
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
