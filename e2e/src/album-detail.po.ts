import { browser, by, element } from 'protractor';

export class AlbumDetailPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/albums/detail/100') as Promise<any>;
  }

  showAlbumDetail(): Promise<string> {
    return element(
      by.css('app-album-detail .container h4')
    ).getText() as Promise<string>;
  }
}
