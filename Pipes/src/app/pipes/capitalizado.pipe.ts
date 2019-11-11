import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: any, todas:boolean=true): any {

   value=value.toLowerCase();
   let nombres = value.split(" ");
   if(todas==true){
     for (const index in nombres) {
       nombres[index]=nombres[index][0].toUpperCase()+nombres[index].substring(1);
     }
   }
   
  return nombres.join(" ");
  }

}
