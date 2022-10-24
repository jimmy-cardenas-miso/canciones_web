import { browser, by, element } from 'protractor';

export class AddTrackPage {
  // tslint:disable-next-line: typedef
  navigateTo() {
    return browser.get(browser.baseUrl + 'albums/detail/103') as Promise<any>;
  }
  // tslint:disable-next-line: typedef
  navigateToAddNewTrack() {
    return browser.get(
      browser.baseUrl + 'albums/add-track/103'
    ) as Promise<any>;
  }

  // tslint:disable-next-line: typedef
  setNameTrack(text: string) {
    element(by.id('track-name')).sendKeys(text);
  }
  // tslint:disable-next-line: typedef
  setDuration(text: string) {
    element(by.id('track-duration')).sendKeys(text);
  }
  // tslint:disable-next-line: typedef
  clickAddTrackSubmit() {
    element(by.id('btn-add-track-sbt')).click();
  }
  // tslint:disable-next-line: typedef
  expandTrackAccordion() {
    element(by.css('.collapse div')).click();
  }
  // tslint:disable-next-line: typedef
  clickNewTrackButton() {
    element(by.id('btn-add-track')).click();
  }
  // tslint:disable-next-line: typedef
  getTrackList() {
    return element
      .all(by.css('.forum-item app-album-detail div'))
      .last()
      .getText();
  }
}
