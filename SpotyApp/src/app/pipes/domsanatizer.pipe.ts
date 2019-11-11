import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'

@Pipe({
  name: 'dOMSanatizer'
})
export class DOMSanatizerPipe implements PipeTransform {

  constructor(private DOMSanatizer:DomSanitizer){}
  transform(value: any, url:string): any {
    // console.log(value);
    // console.log(url);
    // return null
    let urlCreada=url+value;
    return this.DOMSanatizer.bypassSecurityTrustResourceUrl(urlCreada);
  }
}
