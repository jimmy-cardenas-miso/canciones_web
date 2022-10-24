import { browser, by, element } from 'protractor';

export class ArtistListPage {
  // tslint:disable-next-line: typedef
  navigateTo() {
    return browser.get(browser.baseUrl + '/artists') as Promise<any>;
  }

  // tslint:disable-next-line: typedef
  getArtistList() {
    return element
      .all(by.css('.container-collector .card-title'))
      .last()
      .getText();
  }
}
