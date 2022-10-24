import { browser, by, element } from 'protractor';

export class CollectorAddMusicianPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/collectors/100/add') as Promise<any>;
  }

  clickFirstArtistButton(): void {
    element(by.id('collector-add-button-0')).click();
  }

  getArtistName(): Promise<string> {
    return element
      .all(by.css('.favourite-artists .card .card-title'))
      .last()
      .getText() as Promise<string>;
  }
}
