import { Pipe, PipeTransform } from '@angular/core';
import { isFulfilled } from '../../../node_modules/@types/q';


// le but de ce pipe est de formater la date qui est générer pour ne récupérer uniquement la date et non l'heure

@Pipe({
  name: 'toShortDate' //"1231 213124 | toshortDate"
})
export class ToShortDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    if(value.toLowerCase() === 'asap'){
      return 'dés que possible';
    }else if (value.indexOf('-')>-1) {
      let fullDate,rest;      
      [fullDate, rest] = value.toLowerCase().split('t'); //'2017-06-01T10:30:33Z en faisant un split sur la T tous ce qui ce trouve avant le T sera dans la variable fullDate et le reste dans le rest
                                                        //' dans l'exemple 2017-06-01 se retouvera dans fullDate et 13:30:33Z dans le rest
      
      let year, month, date;
      [year,month,date] = fullDate.split('-');

      return `${date}/${month}/${year}`;
    }else{
      return '--';
    }
  }

}
