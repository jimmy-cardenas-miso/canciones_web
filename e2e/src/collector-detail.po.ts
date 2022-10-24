import { browser, by, element } from 'protractor';

export class CollectorDetailPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/collectors/100') as Promise<any>;
  }

  showCollectorDetail(): Promise<string> {
    return element(
      by.css('.container-collector h1')
    ).getText() as Promise<string>;
  }
}
