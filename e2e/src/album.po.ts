import { browser, by, element } from 'protractor';

export class AlbumPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/albums') as Promise<any>;
  }

  getAlbumsList(): Promise<string> {
    return element
      .all(by.css('.albums app-album-item div'))
      .last()
      .getText() as Promise<string>;
  }
}
