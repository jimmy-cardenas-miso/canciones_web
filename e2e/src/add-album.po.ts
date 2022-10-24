import { browser, by, element } from 'protractor';

export class AddAlbumPage {
  // tslint:disable-next-line: typedef
  navigateTo() {
    return browser.get(browser.baseUrl + 'collectors/100') as Promise<any>;
  }

  // tslint:disable-next-line: typedef
  setNameTrack(text: string) {
    element(by.id('album-name')).sendKeys(text);
  }
  // tslint:disable-next-line: typedef
  setCover(text: string) {
    element(by.id('album-cover')).sendKeys(text);
  }
  // tslint:disable-next-line: typedef
  setReleaseDate(text: string) {
    element(by.id('album-release')).sendKeys(text);
  }
  // tslint:disable-next-line: typedef
  setDescription(text: string) {
    element(by.id('album-description')).sendKeys(text);
  }
  // tslint:disable-next-line: typedef
  setgenre() {
    element(by.css('select option:nth-child(1)')).click();
  }

  // tslint:disable-next-line: typedef
  clickAddAlbumSubmit() {
    element(by.id('add-album-submit')).click();
  }

  // tslint:disable-next-line: typedef
  clickNewAlbumButton() {
    element(by.id('add-new-album')).click();
  }
  // tslint:disable-next-line: typedef
  navigateToAlbums() {
    return browser.get(browser.baseUrl + 'albums') as Promise<any>;
  }
  // tslint:disable-next-line: typedef
  getAlbumsList() {
    return element.all(by.css('.albums app-album-item div')).last().getText();
  }
}
