import { browser, by, element } from 'protractor';

export class CollectorPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/collectors') as Promise<any>;
  }

  getCollectorList(): Promise<string> {
    return element
      .all(by.css('.container-collector .card-title'))
      .last()
      .getText() as Promise<string>;
  }
}
