import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})

export class NoImagePipe implements PipeTransform {

  transform(value: any): any {
    if(value=="null" || value == null){
      return "../../assets/Images/No-image-found.jpg"
    }
    return value;
  }

}
