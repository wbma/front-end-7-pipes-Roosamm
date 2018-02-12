import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(filename: string, args?: string): string {
    const image = {
      large: '-tn640.png',
      medium: '-tn320.png',
      small: '-tn160.png',
      screenshot: '-tn400.png'
    };
    if (args) {
      return filename.split( '.')[0] + image[args];
    }
    return filename.split( '.')[0] + image.small;
  }

}
