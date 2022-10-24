import * as urlTemplate from 'url-template';
import { environment } from '@environment';

export const urlBuilder: any = {
  // tslint:disable-next-line: ban-types
  services(url: string, options: Object = {}): string {
    const serverUrl = getServicesUrl(url);
    return urlTemplate.parse(serverUrl).expand(options);
  }
};

function getServicesUrl(url: string): string {
  return environment.api.server_url + url;
}
