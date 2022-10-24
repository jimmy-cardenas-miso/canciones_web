import { Pipe, PipeTransform } from '@angular/core';
import { environment as ENV } from '@environment';
import { isNullOrUndefined } from '@app/commons/utils/util';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {
  private baseImg: string = ENV.resources.base_img;

  transform(value: string): string {
    return !isNullOrUndefined(value) ? this.baseImg + value : value;
  }
}
