import { browser, by, element } from 'protractor';

export class ArtistMusicianBandPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/artists/band/101') as Promise<any>;
  }

  setMusician(): void {
    element(by.css('select option:nth-child(1)')).click();
  }

  clickAddMusician(): void {
    element(by.id('btnAddMusician')).click();
  }

  getMusicianList(): Promise<string> {
    return element
      .all(by.css('.musician .comment-post p'))
      .last()
      .getText() as Promise<string>;
  }
}
