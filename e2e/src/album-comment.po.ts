import { browser, by, element } from 'protractor';

export class AlbumCommentPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/albums/detail/100') as Promise<any>;
  }

  setCollector(): void {
    element(by.css('select option:nth-child(1)')).click();
  }

  setDescription(text: string): void {
    element(by.id('description')).sendKeys(text);
  }

  setRating(rating: number): void {
    element(by.id('rating')).sendKeys(rating);
  }

  clickAddNewComment(): void {
    element(by.id('btnAddNewComment')).click();
  }

  clickListComment(): void {
    element(by.id('comments-list')).click();
  }

  getCommentList(): Promise<string> {
    return element
      .all(by.css('.forum-item .comment-post p'))
      .last()
      .getText() as Promise<string>;
  }
}
