import { browser, by, element } from 'protractor';

export class ArtistDetailPage {
  // tslint:disable-next-line: typedef
  navigateTo() {
    return browser.get(browser.baseUrl + '/artists/100') as Promise<any>;
  }

  // tslint:disable-next-line: typedef
  ShowArtistDetail() {
    return element(by.css('app-artist-details .container h1')).getText();
  }
}
